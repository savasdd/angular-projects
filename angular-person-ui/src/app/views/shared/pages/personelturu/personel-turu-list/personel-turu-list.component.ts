import { Component, OnInit } from '@angular/core';
import request from 'axios';
import { PYS_URL, GridDef, overlayNoRows } from "../../../service/pys.url";
import { PysService } from "../../../service/pys.service";


@Component({
  selector: 'app-personel-turu-list',
  templateUrl: './personel-turu-list.component.html',
  styleUrls: ['./personel-turu-list.component.scss']
})
export class PersonelTuruListComponent implements OnInit {
  gridDef = GridDef;
  gridSelection = "single";
  overlayNoRows = overlayNoRows;
  rowData = [];

  constructor(private service: PysService) { }

  ngOnInit(): void {
    this.getData();
  }

  columns = [
    { 'headerName': 'ID', 'field': 'kayitId', 'width': 100, 'flex': 0 },
    { 'headerName': 'Kırılım 1', 'field': 'kirilim1.tanim', 'width': 200, 'flex': 1 },
    { 'headerName': 'Kırılım 2', 'field': 'kirilim2.tanim', 'width': 200, 'flex': 1 },
    { 'headerName': 'Kırılım 3', 'field': 'kirilim3.tanim', 'width': 200, 'flex': 1 },
    { 'headerName': 'Kadro Sözleşmeli', 'field': 'kadro.tanim', 'width': 200, 'flex': 1 },
    { 'headerName': 'Personel Grubu', 'field': 'personel.tanim', 'width': 200, 'flex': 1 },
  ];

  getData(): void {
    this.service.getList(PYS_URL.PERSONEL_TURU_GET, null).subscribe((val: Object[]) => {
      this.rowData = val;
    });
  }

}
