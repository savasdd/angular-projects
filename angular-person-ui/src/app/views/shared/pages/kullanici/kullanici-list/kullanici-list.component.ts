import { Component, OnInit } from '@angular/core';
import request from 'axios';
import { PYS_URL, GridDef, overlayNoRows } from "../../../service/pys.url"
import { PysService } from "../../../service/pys.service";
import { CustomCombo } from "../../../model/CustomCombo";

@Component({
  selector: 'app-kullanici-list',
  templateUrl: './kullanici-list.component.html',
  styleUrls: ['./kullanici-list.component.scss']
})
export class KullaniciListComponent implements OnInit {
  gridDef = GridDef;
  gridSelection = "single";
  overlayNoRows = overlayNoRows;
  rowData = [];
  kurumList: Array<CustomCombo> = [];
  isYeriList: Array<CustomCombo> = [];

  constructor(private service: PysService) { }

  ngOnInit(): void {
    this.kurumList = this.service.getKurum(PYS_URL.GVN_KURUM_BY_ISYERI_GET);
  }

  columns = [
    { 'headerName': 'Kurum', 'field': 'kurum.tanim', 'width': 300, 'flex': 1 },
    { 'headerName': 'İş Yer', 'field': 'isYeri.tanim', 'width': 300, 'flex': 1 },
    { 'headerName': 'Ad', 'field': 'ad', 'width': 200, 'flex': 1 },
    { 'headerName': 'Soyad', 'field': 'soyad', 'width': 120, 'flex': 1 },
    { 'headerName': 'Kullanıcı Adı', 'field': 'kullaniciAdi', 'width': 200, 'flex': 1 },
    { 'headerName': 'Aktif', 'field': 'aktif', 'width': 100, 'flex': 0 },
    { 'headerName': 'LDAP', 'field': 'ldapKullanici', 'width': 100, 'flex': 1 },
  ];

  getIsYeri(id: CustomCombo): void {
    if (id) {
      this.isYeriList = this.service.getIsYeri(PYS_URL.GVN_IS_YERI_GET_KURUM + id.value);
    }
  }

  getData(id: CustomCombo): void {
    if (id) {
      this.service.getList(PYS_URL.GVN_KULLANICI_GET_ISYERI + id.value, null).subscribe((val: Object[]) => {
        this.rowData = val;
      });
    }
    else
      this.rowData = [];
  }

}
