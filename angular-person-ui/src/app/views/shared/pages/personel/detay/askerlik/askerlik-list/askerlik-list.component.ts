import { Component, OnInit, Input } from '@angular/core';
import { PYS_URL, GridDef, overlayNoRows } from "../../../../../service/pys.url"
import { PysService } from "../../../../../service/pys.service";

@Component({
  selector: 'app-askerlik-list',
  templateUrl: './askerlik-list.component.html',
  styleUrls: ['./askerlik-list.component.scss']
})
export class AskerlikListComponent implements OnInit {
  gridDef = GridDef;
  gridSelection = "single";
  overlayNoRows = overlayNoRows;
  rowData = [];
  datas: Object[] = [];

  @Input()
  personelId: string;

  constructor(private service: PysService) { }

  ngOnInit(): void {
    this.getData();
  }

  columns = [
    { 'headerName': 'Askerlik Durumu', 'field': 'durum.tanim', 'width': 250, 'flex': 1 },
    { 'headerName': 'Yedek Subay Okuluna Başlama Tarihi', 'field': 'okulBas', 'width': 250, 'flex': 1 },
    { 'headerName': 'Yedek Subay Okulu Bitiş Tarihi', 'field': 'okulBitis', 'width': 200, 'flex': 1 },
    { 'headerName': 'Terhis Tarihi', 'field': 'terhisTarihi', 'width': 120, 'flex': 1 },
    { 'headerName': 'Rütbesi', 'field': 'rutbe.tanim', 'width': 120, 'flex': 1 },
    { 'headerName': 'Askerlik Sınıfı', 'field': 'sinif.tanim', 'width': 120, 'flex': 1 },
  ];

  getData(): void {
    this.service.getList(PYS_URL.SCL_ASKERLIK_PERS_GET + this.personelId, null).subscribe((val: Object[]) => {
      this.rowData = val;
    });
  }


}
