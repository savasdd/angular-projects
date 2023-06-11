import { Component, OnInit } from '@angular/core';
import request from 'axios';
import { PYS_URL, GridDef, overlayNoRows } from "../../../service/pys.url"
import { PysService } from "../../../service/pys.service";

@Component({
  selector: 'app-kod-list',
  templateUrl: './kod-list.component.html',
  styleUrls: ['./kod-list.component.scss']
})
export class KodListComponent implements OnInit {
  gridDef = GridDef;
  gridSelection = "single";
  overlayNoRows = overlayNoRows;
  rowData = [];
  datas: Object[] = [];

  constructor(private service: PysService) { }

  ngOnInit(): void {
    this.getData();
  }

  columns = [
    { 'headerName': 'ID', 'field': 'kodId', 'width': 100, 'flex': 0 },
    { 'headerName': 'Tanım', 'field': 'tanim', 'width': 250, 'flex': 1 },
    { 'headerName': 'Kod', 'field': 'kod', 'width': 250, 'flex': 1 },
    { 'headerName': 'Açıklama', 'field': 'aciklama', 'width': 200, 'flex': 0 },
    { 'headerName': 'Sıra No', 'field': 'siraNo', 'width': 120, 'flex': 1 },
    { 'headerName': 'Aktif', 'field': 'aktif', 'width': 100, 'flex': 0 },
    //{ field: 'total', minWidth: 175, cellRenderer: TotalValueRenderer },

    // {
    //   headerName: 'Name',
    //   cellRendererFramwork: KodListComponent,
    //   //cellRendererParams: {
    //   //  onClick: (params) => this.getById(params)
    //   // },
    //   cellRenderer: function (params) {
    //     return '<button ng-click="getById(data)">Expand All</button>';
    //   }
    // },
  ];



  getData(): void {
    this.service.getList(PYS_URL.KOD_GET_ALL, null).subscribe((val: Object[]) => {
      this.rowData = val;
    });
  }

  getById(param: string): void {
    console.log(param)
  }


}
