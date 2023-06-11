import { Component, OnInit } from '@angular/core';
import request from 'axios';
import { PYS_URL, GridDef, overlayNoRows } from "../../../../service/pys.url";
import { PysService } from "../../../../service/pys.service";

@Component({
  selector: 'app-islem-list',
  templateUrl: './islem-list.component.html',
  styleUrls: ['./islem-list.component.scss']
})
export class IslemListComponent implements OnInit {
  gridDef = GridDef;
  gridSelection = "single";
  overlayNoRows = overlayNoRows;
  rowData = [];
  basTarih: Date;
  bitTarih: Date;

  constructor(private service: PysService) { }

  ngOnInit(): void {
    let today = new Date();
    this.basTarih = new Date(today.getFullYear(), today.getMonth(), 1);
    this.bitTarih = new Date();
  }

  columns = [
    { 'headerName': 'Kullanici', 'field': 'kullanici', 'width': 150, 'flex': 0 },
    { 'headerName': 'Servis', 'field': 'servis', 'width': 200, 'flex': 1 },
    { 'headerName': 'İşlem', 'field': 'response', 'width': 200, 'flex': 1 },
    { 'headerName': 'Metot', 'field': 'metot', 'width': 120, 'flex': 1 },
    { 'headerName': 'Statüs', 'field': 'status', 'width': 100, 'flex': 0 },
    { 'headerName': 'Tarih', 'field': 'tarih', 'width': 250, 'flex': 0 },
  ];

  sorgula(): void {
    const dto = {
      basTarihi: this.basTarih.toLocaleDateString('Tr-tr'),
      bitTarihi: this.bitTarih.toLocaleDateString('Tr-tr')
    };

    this.service.getListBody(PYS_URL.ISLEM_LOG_GET_PARAM, dto).subscribe((val: Object[]) => {
      this.rowData = val;
    });

  };

}
