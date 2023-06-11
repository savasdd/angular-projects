import { Component, OnInit } from '@angular/core';
import request from 'axios';
import { PYS_URL, GridDef, overlayNoRows } from "../../../service/pys.url"
import { PysService } from "../../../service/pys.service";

@Component({
  selector: 'app-kurum-list',
  templateUrl: './kurum-list.component.html',
  styleUrls: ['./kurum-list.component.scss']
})
export class KurumListComponent implements OnInit {
  gridDef = GridDef;
  gridSelection = "single";
  overlayNoRows = overlayNoRows;
  rowData = [];

  constructor(private service: PysService) { }

  ngOnInit(): void {
    this.getData();
  }

  columns = [
    { 'headerName': 'ID', 'field': 'kurumId', 'width': 120, 'flex': 0 },
    { 'headerName': 'Tanım', 'field': 'tanim', 'width': 250, 'flex': 1 },
    { 'headerName': 'Kısa Tanım', 'field': 'kisaTanim', 'width': 200, 'flex': 1 },
    { 'headerName': 'Kep Adresi', 'field': 'kepAdresi', 'width': 200, 'flex': 1 },
    { 'headerName': 'Detsis No', 'field': 'detsis', 'width': 200, 'flex': 1 },
  ];


  getData(): void {
    this.service.getList(PYS_URL.GVN_KURUM_GET,null).subscribe((val: Object[]) => {
      this.rowData = val;
    });
  }
}
