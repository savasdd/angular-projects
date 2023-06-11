import { Component, OnInit, Input } from '@angular/core';
import { PYS_URL, GridDef, overlayNoRows } from "../../../../../service/pys.url"
import { PysService } from "../../../../../service/pys.service";

@Component({
  selector: 'app-hizmet-list',
  templateUrl: './hizmet-list.component.html',
  styleUrls: ['./hizmet-list.component.scss']
})
export class HizmetListComponent implements OnInit {
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
    { 'headerName': 'Hizmet Türü', 'field': 'hizmetTur.tanim', 'width': 100, 'flex': 0 },
    { 'headerName': 'Kadrosunun Bulunduğu Kurum', 'field': 'kurum.tanim', 'width': 250, 'flex': 1},
    { 'headerName': 'Kadro Birimi', 'field': 'kadroBirim.tanim', 'width': 250, 'flex': 0 },
    { 'headerName': 'Birimi Açıklama', 'field': 'birimAciklama', 'width': 200, 'flex': 0 },
    { 'headerName': 'Kadro Ünvanı', 'field': 'kadroUnvan.tanim', 'width': 120, 'flex': 1 },
    { 'headerName': 'Ünvan Açıklama', 'field': 'unvanAciklama', 'width': 120, 'flex': 1 },
    { 'headerName': 'Başlama Tarihi', 'field': 'baslama', 'width': 200, 'flex': 0, 'date': true },
    { 'headerName': 'Bitiş Tarihi', 'field': 'bitis', 'width': 120, 'flex': 0, 'date': true },
    { 'headerName': 'Prim Gün Sayısı', 'field': 'sure', 'width': 120, 'flex': 0 },
  ];

  getData(): void {
    this.service.getList(PYS_URL.SCL_HIZMET_PERS_GET + this.personelId, null).subscribe((val: Object[]) => {
      this.rowData = val;
    });
  }
}
