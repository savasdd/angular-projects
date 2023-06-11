import { Component, OnInit } from '@angular/core';
import request from 'axios';
import { PYS_URL, GridDef, overlayNoRows } from "../../../../service/pys.url";
import { PysService } from "../../../../service/pys.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
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
    { 'headerName': 'Kullanici', 'field': 'kullaniciAdi', 'width': 200, 'flex': 1 },
    { 'headerName': 'Giriş Zamanı', 'field': 'createDate', 'width': 200, 'flex': 1 },
    { 'headerName': 'Bitiş Zamanı', 'field': 'expireDate', 'width': 200, 'flex': 1 },
  ];

  sorgula(): void {
    const dto = {
      basTarihi: this.basTarih.toLocaleDateString('Tr-tr'),
      bitTarihi: this.bitTarih.toLocaleDateString('Tr-tr')
    };

    this.service.getListBody(PYS_URL.KULLANICI_LOG_GET_PARAM, dto).subscribe((val: Object[]) => {
      this.rowData = val;
    });

  };
}
