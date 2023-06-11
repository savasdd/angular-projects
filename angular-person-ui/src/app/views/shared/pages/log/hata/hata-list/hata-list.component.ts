import { Component, OnInit } from '@angular/core';
import request from 'axios';
import { PYS_URL, GridDef,overlayNoRows } from "../../../../service/pys.url";
import { PysService } from "../../../../service/pys.service";

@Component({
  selector: 'app-hata-list',
  templateUrl: './hata-list.component.html',
  styleUrls: ['./hata-list.component.scss']
})
export class HataListComponent implements OnInit {
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
    { 'headerName': 'Servis', 'field': 'detay', 'width': 200, 'flex': 1 },
    { 'headerName': 'Hata', 'field': 'mesaj', 'width': 200, 'flex': 1 },
    { 'headerName': 'Statüs', 'field': 'status', 'width': 200, 'flex': 0 },
    { 'headerName': 'Tarih', 'field': 'tarih', 'width': 250, 'flex': 0 },
  ];

  sorgula(): void {
    const dto = {
      basTarihi: this.basTarih.toLocaleDateString('Tr-tr'),
      bitTarihi: this.bitTarih.toLocaleDateString('Tr-tr')
    };

    this.service.getListBody(PYS_URL.HATA_LOG_GET_PARAM, dto).subscribe((val: Object[]) => {
      this.rowData = val;
    });

  };

}
