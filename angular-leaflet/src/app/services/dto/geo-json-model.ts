export class GeoJsonModelView {
  layerName: string | undefined;
  'the_geom': string;
  properties: string[] | undefined;
  filter: string | undefined;
  maxFeatures: number | undefined;
}
