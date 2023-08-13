import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MapService} from "../../../services/map.service";
import {GeoJsonModelView} from "../../../services/dto/geo-json-model";

declare let L: any;

@Component({
  selector: 'app-landmark',
  templateUrl: './landmark.component.html',
  styleUrls: ['./landmark.component.scss']
})
export class LandmarkComponent implements OnInit {
  @ViewChild('mapDiv', {static: true}) mapDiv: any = ElementRef;
  map: any = L.Map;
  drawnItems: any;
  info: any;
  geojson: any;
  holdingGeojson: any;
  controlLayers: any;
  layerName: any;

  constructor(private mapService: MapService,) {
    this.layerName = 'vw_total_transport_count';
  }

  ngOnInit() {
    this.setMap();
  }

  setMap() {
    this.map = L.map(this.mapDiv.nativeElement, {
      maxBounds: this.mapService.getTurkeyBounds(),
      minZoom: 5,
      maxZoom: 18,
      zoomControl: false,
      attributionControl: false
    });

    this.controlLayers = this.mapService.getDefaultControlLayer();
    this.controlLayers._layers.forEach((item: any) => {
      if (item.name === 'Google Yol Haritası') {
        item.layer.addTo(this.map);
      }
    });
    this.controlLayers.addTo(this.map);

    this.drawnItems = L.featureGroup().addTo(this.map);
    this.mapService.addZoomInButton(this.map);
    this.mapService.addZoomOutButton(this.map);
    this.mapService.addHomeButton(this.map, this).subscribe({
      next(object: any): void {
        object.holdingGeojson.clearLayers();
        object.map.fitBounds(object.mapService.getTurkeyBounds());
        object.map.addLayer(object.geojson);
        object.map.invalidateSize();
      }
    });

    //Draw-Edit
    //this.mapService.addRectangle(this.map);
    //this.mapService.addCircle(this.map);
    this.mapService.addPolygon(this.map);
    this.mapService.setDraw(this.map, this.drawnItems);
    this.map.on(L.Draw.Event.CREATED, (event: any) => {
      let layer = event.layer;
      this.drawnItems.addLayer(layer);
      const lyr = this.drawnItems.toGeoJSON();

      console.log("create:")
      const shape_for_db = JSON.stringify(lyr);
      console.log(shape_for_db)

    });
    this.map.on(L.Draw.Event.EDITED, (event: any) => {
      const lyr = this.drawnItems.toGeoJSON();
      console.log("update:")
      console.log(lyr)
    });
    this.map.on(L.Draw.Event.DELETED, (event: any) => {
      const lyr = this.drawnItems.toGeoJSON();
      console.log("delete:")
      console.log(lyr)
    });


    this.mapService.addZoomControlButton(this.map);
    this.map.fitBounds(this.mapService.getTurkeyBounds());
    this.map.invalidateSize();

    this.setInfo();
  }

  getColor(d: any) {
    return d > 10000 ? '#800026' :
      d > 5000 ? '#BD0026' :
        d > 2000 ? '#E31A1C' :
          d > 1000 ? '#FC4E2A' :
            d > 500 ? '#FD8D3C' :
              d > 200 ? '#FEB24C' :
                d > 100 ? '#FED976' :
                  d > 0 ? '#ffeda0' :
                    'transparent';
  }

  style(feature: any) {
    return {
      weight: 2,
      opacity: 1,
      color: 'white',
      dashArray: '3',
      fillOpacity: 0.7,
      fillColor: this.getColor(feature.properties.total_count)
    };
  }

  highlightFeature(e: any) {
    const layer = e.target;
    layer.setStyle({
      weight: 3,
      color: '#58ad39',
      dashArray: '',
      fillOpacity: 0.7
    });
    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
      layer.bringToFront();
    }
    this.info.update(layer.feature.properties);
  }

  resetHighlight(e: any) {
    this.geojson.resetStyle(e.target);
    this.info.update();
  }

  getToFeature(e: any) {
    this.map.flyToBounds(e.target.getBounds(), {duration: 1})
    this.map.removeLayer(this.geojson);

    const geoJsonModelView: GeoJsonModelView = {
      layerName: 'vw_holding_animal_count',
      the_geom: 'holding_geom_center',
      filter: 'holding_geom_center IS NOT NULL AND province_id = ' + e.target.feature.properties.province_id,
      properties: undefined,
      maxFeatures: undefined
    };
    this.mapService.getGeoJson(geoJsonModelView).subscribe((data: any) => {
      if (data && data.features && data.features.length > 0) {
        this.holdingGeojson.clearLayers();
        this.holdingGeojson.addData(data);
        setTimeout(() => {
          this.map.flyToBounds(this.holdingGeojson.getBounds(), {duration: 1})
        }, 300);
      }
    });
  }

  setInfo() {
    let geoJsonModelView: GeoJsonModelView = {
      layerName: this.layerName,
      the_geom: 'geom',
      filter: 'geom IS NOT NULL',
      properties: undefined,
      maxFeatures: undefined
    };
    this.mapService.getPublicGeoJson(geoJsonModelView).subscribe((data: any) => {
      if (data && data.features && data.features.length > 0) {
        this.geojson = L.geoJson(data, {
          style: (feature: any) => this.style(feature),
          onEachFeature: (feature: any, layer: any) => {
            layer.on({
              mouseover: (e: any) => this.highlightFeature(e),
              mouseout: (e: any) => this.resetHighlight(e),
              click: (e: any) => this.getToFeature(e)
            });
          }
        });

        this.controlLayers.addOverlay(this.geojson, 'Vehicle Count')
        this.geojson.addTo(this.map);
      }
    });


    geoJsonModelView = {
      layerName: 'vw_quarantine11',
      the_geom: 'geom',
      filter: 'geom IS NOT NULL',
      properties: undefined,
      maxFeatures: undefined
    };
    this.mapService.getPublicGeoJson(geoJsonModelView).subscribe((data: any) => {
      if (data && data.features && data.features.length > 0) {
        const polygonsWithCenters = L.layerGroup();
        const geojson = L.geoJson(data, {
          style: {
            weight: 2,
            opacity: 1,
            color: 'red',
            dashArray: '3',
            fillOpacity: 0.2,
            fillColor: 'red'
          }
        });
        polygonsWithCenters.addTo(this.map);
        this.controlLayers.addOverlay(geojson, 'Karantina Bölgesi')
        geojson.addTo(this.map);
      }
    });

    const _div = L.DomUtil.create('div', 'mapinfo');
    this.info = new L.Control({position: 'topright'});
    this.info.onAdd = (map: any) => {
      this.info.update();
      return _div;
    };

    this.info.update = (props: any) => {
      _div.innerHTML = '<h4>Bilgi</h4>' + (props ? '<b>' + props.province_name + '</b><br /> Vehicle Count: ' + props.total_count : 'İl seçiniz');
    };


    const legend = L.control({position: 'bottomright'});
    legend.onAdd = (map: any) => {
      const div = L.DomUtil.create('div', 'mapinfo maplegend');
      const grades = [0, 100, 200, 500, 1000, 2000, 5000, 10000];
      const labels: any = [];
      let from;
      let to;

      for (let i = 0; i < grades.length; i++) {
        from = grades[i];
        to = grades[i + 1];

        labels.push(
          '<i style="background:' + this.getColor(from + 1) + '"></i> ' +
          from + (to ? '&ndash;' + to : '+'));
      }

      div.innerHTML = labels.join('<br>');
      return div;
    };

    legend.addTo(this.map);
    this.info.addTo(this.map);
  }

}
