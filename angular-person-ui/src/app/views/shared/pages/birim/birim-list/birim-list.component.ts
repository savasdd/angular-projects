import { Component, OnInit } from '@angular/core';
import request from 'axios';
import { PYS_URL, GridDef, overlayNoRows } from "../../../service/pys.url"
import { PysService } from "../../../service/pys.service";
import { CustomCombo } from "../../../model/CustomCombo";
import { HttpParams } from "@angular/common/http";

@Component({
  selector: 'app-birim-list',
  templateUrl: './birim-list.component.html',
  styleUrls: ['./birim-list.component.scss']
})
export class BirimListComponent implements OnInit {
  gridDef = GridDef;
  gridSelection = "single";
  overlayNoRows = overlayNoRows;
  rowData = [];
  kurumList: Array<CustomCombo> = [];
  selectBirim = null;

  constructor(private service: PysService) { }

  ngOnInit(): void {
    this.kurumList = this.service.getBirimKurulus(PYS_URL.GVN_BIRIM_KURULUS_GET);
  }

  columns = [
    { 'headerName': 'ID', 'field': 'birimId.birimId', 'width': 100, 'flex': 0 },
    { 'headerName': 'Birim Adı', 'field': 'tanim', 'width': 200, 'flex': 1 },
    { 'headerName': 'Teşkilat', 'field': 'teskilat.tanim', 'width': 200, 'flex': 1 },
    { 'headerName': 'İl', 'field': 'il.tanim', 'width': 200, 'flex': 1 },
    { 'headerName': 'İlçe', 'field': 'ilce.tanim', 'width': 200, 'flex': 1 },
    { 'headerName': 'Seviye Kodu', 'field': 'seviye', 'width': 200, 'flex': 1 },
  ];

  sorgula(): void {
    if (this.selectBirim != null) {
      const params = new HttpParams().set('params', this.selectBirim);
      this.service.getList(PYS_URL.GVN_BIRIM_ISYERI, params).subscribe((val: Object[]) => {
        this.rowData = val;
      });
    }
    else
      this.rowData = [];
  }

  getBirim(id: CustomCombo): void {
    if (id) {
      this.selectBirim = id.value;
    } else
      this.selectBirim = null;
  }
}
