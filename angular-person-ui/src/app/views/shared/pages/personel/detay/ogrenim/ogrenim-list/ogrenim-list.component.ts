import { Component, OnInit, Input } from '@angular/core';
import { PYS_URL, GridDef, overlayNoRows } from "../../../../../service/pys.url"
import { PysService } from "../../../../../service/pys.service";

@Component({
  selector: 'app-ogrenim-list',
  templateUrl: './ogrenim-list.component.html',
  styleUrls: ['./ogrenim-list.component.scss']
})
export class OgrenimListComponent implements OnInit {
  gridDef = GridDef;
  gridSelection = "single";
  overlayNoRows = overlayNoRows;
  rowData = [];
  datas: Object[] = [];

  @Input()
  personelId: string;

  constructor(private service: PysService) { }

  ngOnInit(): void {
    this.getData();
  }

  columns = [
    { 'headerName': 'Durum', 'field': 'durumAd', 'width': 100, 'flex': 0 },
    { 'headerName': 'Üniversite/Okul', 'field': 'universiteAd', 'width': 250, 'flex': 1 },
    { 'headerName': 'Fakülte', 'field': 'fakulteAd', 'width': 250, 'flex': 1 },
    { 'headerName': 'Bölüm', 'field': 'bolumAd', 'width': 200, 'flex': 1 },
    { 'headerName': 'Hazırlık', 'field': 'hazirlik', 'width': 120, 'flex': 1, 'hazirlik': true },
    { 'headerName': 'Öğrenim Süresi', 'field': 'sure', 'width': 120, 'flex': 1 },
    { 'headerName': 'Derece', 'field': 'derece', 'width': 120, 'flex': 1 },
  ];

  getData(): void {
    this.service.getList(PYS_URL.SCL_OGRENIM_PERS_GET + this.personelId, null).subscribe((val: Object[]) => {
      this.rowData = val;
    });
  }

}
