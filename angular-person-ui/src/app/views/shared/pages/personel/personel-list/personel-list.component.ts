import { Component, OnInit } from '@angular/core';
import request from 'axios';
import { Router } from '@angular/router';
import { PYS_URL, GridDef, overlayNoRows } from "../../../service/pys.url"
import { PysService } from "../../../service/pys.service";
import { CustomCombo } from "../../../model/CustomCombo";

@Component({
  selector: 'app-personel-list',
  templateUrl: './personel-list.component.html',
  styleUrls: ['./personel-list.component.scss']
})
export class PersonelListComponent implements OnInit {
  gridDef = GridDef;
  gridSelection = "single";
  overlayNoRows = overlayNoRows;
  rowData = [];
  kurumList: Array<CustomCombo> = [];
  isYeriList: Array<CustomCombo> = [];
  birimList: Array<CustomCombo> = [];
  selectKurum = null;
  selectIsYeri = null;
  selectBirim = null;

  constructor(private router: Router, private service: PysService) { }

  ngOnInit(): void {
    this.kurumList = this.service.getKurum(PYS_URL.GVN_KURUM_BY_ISYERI_GET);
  }

  columns = [
    { 'headerName': 'Sicil No', 'field': 'sicilNo', 'width': 150, 'flex': 0 },
    { 'headerName': 'T.C. No', 'field': 'tc', 'width': 250, 'flex': 1 },
    { 'headerName': 'Adı', 'field': 'ad', 'width': 250, 'flex': 1 },
    { 'headerName': 'Soyadı', 'field': 'soyad', 'width': 200, 'flex': 1 },
    { 'headerName': 'Kadro Kurum', 'field': 'kurum', 'width': 400, 'flex': 1 },
    { 'headerName': 'Kadro İş Yeri', 'field': 'isyeri', 'width': 400, 'flex': 1 },
    { 'headerName': 'Kadro Birimi', 'field': 'birim', 'width': 400, 'flex': 1 },
  ];

  sorgula(): void {
    const dto = {
      kadroKurum: { kurumId: this.selectKurum ? this.selectKurum : null },
      kadroIsyeri: { isYeriId: this.selectIsYeri ? this.selectIsYeri : null },
      kadroBirim: {
        birimId: {
          birimId: this.selectBirim ? this.selectBirim : null,
          kurumId: null,
          isyeriId: null
        }
      },
      gorevSorgula: null,
    };

    this.service.getListBody(PYS_URL.SCL_PERSONEL_PARAM_GET, dto).subscribe((val: Object[]) => {
      this.rowData = val;
    });
  }


  getKurum(id: CustomCombo): void {
    if (id) {
      this.selectKurum = id.value;
      this.isYeriList = this.service.getIsYeri(PYS_URL.GVN_IS_YERI_GET_KURUM + id.value);
    }
    else
      this.selectKurum = null;
  }

  getIsYeri(id: CustomCombo): void {
    if (id) {
      this.selectIsYeri = id.value;
      this.birimList = this.service.getBirim(PYS_URL.GVN_BIRIM_ISYERI_GET + id.value, "-1");
    } else
      this.selectIsYeri = null;
  }

  getBirim(id: CustomCombo): void {
    if (id) {
      this.selectBirim = id.value;
    } else
      this.selectBirim = null;
  }

  test(): void {
    const data={personelId:'02fc1bda-7c0f-4c9b-9819-7abbb6a3af5b'}
    this.router.navigateByUrl('/Personels/PYSPersonelEdit', { state: { dto:data} });
  }

}
