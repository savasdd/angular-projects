import { Component, OnInit, Input } from '@angular/core';
import { PYS_URL, GridDef, overlayNoRows } from "../../../../../service/pys.url"
import { PysService } from "../../../../../service/pys.service";

@Component({
  selector: 'app-gorev-list',
  templateUrl: './gorev-list.component.html',
  styleUrls: ['./gorev-list.component.scss']
})
export class GorevListComponent implements OnInit {
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
    { 'headerName': 'Kadrosunun Bulunduğu Kurum', 'field': 'kadroKurumAd', 'width': 250, 'flex': 1 },
    { 'headerName': 'Kadro Birimi', 'field': 'kadroBirimAd', 'width': 250, 'flex': 1 },
    { 'headerName': 'Görev Yerinin Bulunduğu Kurum', 'field': 'gorevKurumAd', 'width': 250, 'flex': 1 },
    { 'headerName': 'Görev Yeri', 'field': 'gorevBirimAd', 'width': 200, 'flex': 1 },
    { 'headerName': 'Ünvan', 'field': 'unvanAd', 'width': 120, 'flex': 1 },
    { 'headerName': 'Yönetici', 'field': 'yonetici', 'width': 120, 'flex': 0, 'yonetici': true },
    { 'headerName': 'Asil/Vekalet', 'field': 'vekaletAd', 'width': 250, 'flex': 0 },
    { 'headerName': 'Başlama Tarihi', 'field': 'baslama', 'width': 200, 'flex': 0, 'date': true },
    { 'headerName': 'Bitiş Tarihi', 'field': 'bitis', 'width': 120, 'flex': 0, 'date': true },
  ];

  getData(): void {
    this.service.getList(PYS_URL.SCL_GOREV_PERS_GET + this.personelId, null).subscribe((val: Object[]) => {
      this.rowData = val;
    });
  }
}
