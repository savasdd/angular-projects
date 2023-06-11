import { Component, OnInit, Input } from '@angular/core';
import { PYS_URL, GridDef, overlayNoRows } from "../../../../../service/pys.url"
import { PysService } from "../../../../../service/pys.service";

@Component({
  selector: 'app-egitim-list',
  templateUrl: './egitim-list.component.html',
  styleUrls: ['./egitim-list.component.scss']
})
export class EgitimListComponent implements OnInit {
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
    { 'headerName': 'Eğitimin Türü', 'field': 'turKoduAd', 'width': 250, 'flex': 1 },
    { 'headerName': 'Eğitimin Tipi', 'field': 'tipKoduAd', 'width': 250, 'flex': 1 },
    { 'headerName': 'Eğitimin Adı', 'field': 'adi', 'width': 200, 'flex': 1 },
    { 'headerName': 'Eğitimi Veren Kurum', 'field': 'kurum', 'width': 120, 'flex': 1 },
    { 'headerName': 'Eğitim Yeri', 'field': 'yeri', 'width': 120, 'flex': 1 },
    { 'headerName': 'Başlama Tarihi', 'field': 'baslama', 'width': 120, 'flex': 0, 'date': true },
    { 'headerName': 'Bitiş Tarihi', 'field': 'bitis', 'width': 120, 'flex': 0, 'date': true },
  ];

  getData(): void {
    this.service.getList(PYS_URL.SCL_EGITIM_PERS_GET + this.personelId, null).subscribe((val: Object[]) => {
      this.rowData = val;
    });
  }

}
