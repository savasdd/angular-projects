import { Component, OnInit } from '@angular/core';
import request from 'axios';
import { PYS_URL, GridDef, overlayNoRows } from "../../../service/pys.url"
import { PysService } from "../../../service/pys.service";


@Component({
  selector: 'app-isyeri-list',
  templateUrl: './isyeri-list.component.html',
  styleUrls: ['./isyeri-list.component.scss']
})
export class IsyeriListComponent implements OnInit {
  gridDef = GridDef;
  gridSelection = "single";
  overlayNoRows = overlayNoRows;
  rowData = [];

  constructor(private service: PysService) { }

  ngOnInit(): void {
    this.getData();
  }

  columns = [
    { 'headerName': 'ID', 'field': 'isYeriId', 'width': 130, 'flex': 0 },
    { 'headerName': 'Kurum', 'field': 'kurum.tanim', 'width': 200, 'flex': 1 },
    { 'headerName': 'Tanım', 'field': 'tanim', 'width': 300, 'flex': 1 },
    { 'headerName': 'Kısa Tanım', 'field': 'kisaTanim', 'width': 200, 'flex': 1 },
    { 'headerName': 'Tür', 'field': 'tur.tanim', 'width': 200, 'flex': 1 },
    { 'headerName': 'Adres', 'field': 'adres', 'width': 160, 'flex': 1 },
    { 'headerName': 'Ekran/Web', 'field': 'webServisi.tanim', 'width': 200, 'flex': 0 },
  ];

  getData(): void {
    this.service.getList(PYS_URL.GVN_IS_YERI_GET,null).subscribe((val: Object[]) => {
      this.rowData = val;
    });
  }

}
