import { Component, OnInit } from '@angular/core';
import request from 'axios';
import { PYS_URL, GridDef, overlayNoRows } from "../../../service/pys.url"
import { PysService } from "../../../service/pys.service";


@Component({
  selector: 'app-rol-grup-list',
  templateUrl: './rol-grup-list.component.html',
  styleUrls: ['./rol-grup-list.component.scss']
})
export class RolGrupListComponent implements OnInit {
  gridDef = GridDef;
  gridSelection = "single";
  overlayNoRows = overlayNoRows;
  rowData = [];

  constructor(private service: PysService) { }

  ngOnInit(): void {
    this.getData();
  }


  columns = [
    { 'header': 'Grup ID', 'field': 'rolGrupId', 'width': 150, 'flex': 0 },
    { 'header': 'Grup Adı', 'field': 'grupAd', 'width': 300, 'flex': 1 },
    { 'header': 'Açıklama', 'field': 'aciklama', 'width': 300, 'flex': 1 },
    { 'header': 'Aktif', 'field': 'aktif', 'width': 120, 'flex': 1 },
  ];

  getData(): void {
    this.service.getList(PYS_URL.GVN_ROL_GRUP_GET_ALL, null).subscribe((val: Object[]) => {
      this.rowData = val;
    });
  }

}
