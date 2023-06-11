import { Component, OnInit } from '@angular/core';
import request from 'axios';
import { PYS_URL, GridDef, overlayNoRows } from "../../../service/pys.url"
import { PysService } from "../../../service/pys.service";
import { CustomCombo } from "../../../model/CustomCombo";

@Component({
  selector: 'app-konum-list',
  templateUrl: './konum-list.component.html',
  styleUrls: ['./konum-list.component.scss']
})
export class KonumListComponent implements OnInit {
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
    { 'headerName': 'ID', 'field': 'konumId', 'width': 100, 'flex': 0 },
    { 'headerName': 'Kurum', 'field': 'kurum.tanim', 'width': 200, 'flex': 1 },
    { 'headerName': 'İl', 'field': 'il.tanim', 'width': 200, 'flex': 1 },
    { 'headerName': 'Adres', 'field': 'adres', 'width': 200, 'flex': 1 },
  ];

  getIsYeri(id: CustomCombo): void {
    if (id) {
      this.isYeriList = this.service.getIsYeri(PYS_URL.GVN_IS_YERI_GET_KURUM + id.value);
    }
  }

  getData(id: CustomCombo): void {
    if (id) {
      this.service.getList(PYS_URL.GVN_KONUM_ISYERI_GET + id.value, null).subscribe((val: Object[]) => {
        this.rowData = val;
      });
    }
    else
      this.rowData = [];
  }

}
