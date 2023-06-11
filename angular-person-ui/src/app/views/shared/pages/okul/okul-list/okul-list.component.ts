import { Component, OnInit } from '@angular/core';
import request from 'axios';
import { Router } from '@angular/router';
import { PYS_URL, GridDef, overlayNoRows } from "../../../service/pys.url";
import { PysService } from "../../../service/pys.service";
import { CustomCombo } from "../../../model/CustomCombo";

@Component({
  selector: 'app-okul-list',
  templateUrl: './okul-list.component.html',
  styleUrls: ['./okul-list.component.scss']
})
export class OkulListComponent implements OnInit {
  gridDef = GridDef;
  gridSelection = "single";
  overlayNoRows = overlayNoRows;
  rowData = [];
  universiteList: Array<CustomCombo> = [];

  constructor(private router: Router, private service: PysService) { }

  ngOnInit(): void {
    this.universiteList = this.service.getUniversite(PYS_URL.GVN_OKUL_UNIVERSITE);
  }

  columns = [
    { 'headerName': 'ID', 'field': 'kodu', 'width': 100, 'flex': 0 },
    { 'headerName': 'Öğrenim Türü', 'field': 'turuAd', 'width': 200, 'flex': 1 },
    { 'headerName': 'Bulunduğu İl', 'field': 'ilAd', 'width': 200, 'flex': 1 },
    { 'headerName': 'Üniversite Adı', 'field': 'universite', 'width': 200, 'flex': 1 },
    { 'headerName': 'Fakülte Adı', 'field': 'fakulteMeslekKoduAd', 'width': 200, 'flex': 1 },
    { 'headerName': 'Bölüm Adı', 'field': 'birimAd', 'width': 200, 'flex': 1 },
  ];

  getData(id: CustomCombo): void {
    if (id) {
      this.service.getList(PYS_URL.GVN_OKUL_BY_UNIVERSITE + id.value, null).subscribe((val: Object[]) => {
        this.rowData = val;
      });
    }
    else
      this.rowData = [];
  }



  test(): void {
    this.router.navigate(['/Personels/PYSPersonelEdit']);
    console.log("test")
  }
}
