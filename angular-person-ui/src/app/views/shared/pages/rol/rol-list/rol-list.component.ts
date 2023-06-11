import { Component, OnInit } from '@angular/core';
import request from 'axios';
import { PYS_URL, GridDef ,overlayNoRows} from "../../../service/pys.url"
import { PysService } from "../../../service/pys.service";

@Component({
  selector: 'app-rol-list',
  templateUrl: './rol-list.component.html',
  styleUrls: ['./rol-list.component.scss']
})
export class RolListComponent implements OnInit {
  gridDef = GridDef;
  gridSelection = "single";
  overlayNoRows = overlayNoRows;
  rowData = [];

  constructor(private service: PysService) { }

  ngOnInit(): void {
    this.getData();
  }

  columns = [
    { 'headerName': 'Rol No', 'field': 'rolNo', 'width': 100, 'flex': 0 },
    { 'headerName': 'Üst Rol No', 'field': 'ustRolNo', 'width': 250, 'flex': 1 },
    { 'headerName': 'Tanım', 'field': 'tanim', 'width': 250, 'flex': 1 },
    { 'headerName': 'Rol Kodu', 'field': 'rolKodu', 'width': 200, 'flex': 1 },
    { 'headerName': 'Açıklama', 'field': 'aciklama', 'width': 120, 'flex': 1 },
    { 'headerName': 'Sıra No', 'field': 'siraNo', 'width': 120, 'flex': 1 },
  ];

  getData(): void {
    this.service.getList(PYS_URL.GVN_ROL_GET_ALL, null).subscribe((val: Object[]) => {
      this.rowData = val;
    });
  }


}
