import { Component, OnInit, Input } from '@angular/core';
import { PYS_URL, GridDef, overlayNoRows } from "../../../../../service/pys.url"
import { PysService } from "../../../../../service/pys.service";

@Component({
  selector: 'app-dil-list',
  templateUrl: './dil-list.component.html',
  styleUrls: ['./dil-list.component.scss']
})
export class DilListComponent implements OnInit {
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
    { 'headerName': 'Yabancı Dil Adı', 'field': 'dilKoduAd', 'width': 100, 'flex': 1 },
    { 'headerName': 'Sınav Türü', 'field': 'sinavKoduAd', 'width': 250, 'flex': 1 },
    { 'headerName': 'Sınav Tarihi', 'field': 'sinavTarihi', 'width': 250, 'flex': 0, 'date': true },
    { 'headerName': 'Sınav Puanı', 'field': 'sinavPuani', 'width': 200, 'flex': 1 },
    { 'headerName': 'Beyan Tarihi', 'field': 'beyanTarihi', 'width': 120, 'flex': 0, 'date': true },
    { 'headerName': 'Düzeyi', 'field': 'duzeyKoduAd', 'width': 120, 'flex': 1 },
  ];
  getData(): void {
    this.service.getList(PYS_URL.SCL_DIL_PERS_GET + this.personelId, null).subscribe((val: Object[]) => {
      this.rowData = val;
    });
  }

}
