import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import request from 'axios';
import { PYS_URL, GridDef, overlayNoRows } from "../../../service/pys.url"
import { PysService } from "../../../service/pys.service";
import { ToastType } from "../../../model/ToastType";

@Component({
  selector: 'app-parametre-list',
  templateUrl: './parametre-list.component.html',
  styleUrls: ['./parametre-list.component.scss']
})
export class ParametreListComponent implements OnInit {
  gridDef = GridDef;
  gridSelection = "single";
  overlayNoRows = overlayNoRows;
  rowData = [];

  constructor(private service: PysService, private ref: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.ref.detectChanges();
    this.getData();
  }

  columns = [
    { 'headerName': 'ID', 'field': 'parametreId', 'width': 150, 'flex': 0 },
    { 'headerName': 'Parametre Adi', 'field': 'tanim', 'width': 200, 'flex': 1 },
    { 'headerName': 'Parametre Degeri', 'field': 'deger', 'width': 200, 'flex': 1 },
    { 'headerName': 'Aciklama', 'field': 'aciklama', 'width': 200, 'flex': 1 },
  ];

  getData(): void {
    this.service.getList(PYS_URL.PARAM_GET_ALL, null).subscribe((val: Object[]) => {
      this.rowData = val;
    });
  }

  test(): void {
    this.service.showToast(ToastType.warning, "Uyarı", "Test");
  }

}
