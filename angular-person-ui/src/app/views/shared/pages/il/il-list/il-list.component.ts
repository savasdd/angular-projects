import { Component, OnInit } from '@angular/core';
import request from 'axios';
import { PYS_URL, GridDef, overlayNoRows } from "../../../service/pys.url"
import { PysService } from "../../../service/pys.service";

@Component({
  selector: 'app-il-list',
  templateUrl: './il-list.component.html',
  styleUrls: ['./il-list.component.scss']
})
export class IlListComponent implements OnInit {
  gridDef = GridDef;
  gridSelection = "single";
  overlayNoRows = overlayNoRows;
  rowData = [];

  constructor(private service: PysService) { }

  ngOnInit(): void {
    this.getData();
  }

  columns = [
    { 'headerName': 'Mernis Kodu', 'field': 'ilId', 'width': 100, 'flex': 1 },
    { 'headerName': 'Tanım', 'field': 'tanim', 'width': 200, 'flex': 1 },
    { 'headerName': 'Plaka', 'field': 'plaka', 'width': 200, 'flex': 1 },
  ];

  getData(): void {
    this.service.getList(PYS_URL.GVN_IL_GET,null).subscribe((val: Object[]) => {
      this.rowData = val;
    });
  }
}
