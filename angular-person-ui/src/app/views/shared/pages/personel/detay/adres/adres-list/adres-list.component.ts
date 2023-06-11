import { Component, OnInit, Input } from '@angular/core';
import { PYS_URL, GridDef, overlayNoRows } from "../../../../../service/pys.url"
import { PysService } from "../../../../../service/pys.service";

@Component({
  selector: 'app-adres-list',
  templateUrl: './adres-list.component.html',
  styleUrls: ['./adres-list.component.scss']
})
export class AdresListComponent implements OnInit {
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
    { 'headerName': 'Telefon veya E-Posta Türü', 'field': 'telAdresTuru.tanim', 'width': 500, 'flex': 1 },
    { 'headerName': 'Telefon veya E-Posta Bilgisi', 'field': 'telAdresEposta', 'width': 500, 'flex': 1 },
  ];

  getData(): void {
    this.service.getList(PYS_URL.SCL_ADRES_PERS_GET + this.personelId, null).subscribe((val: Object[]) => {
      this.rowData = val;
    });
  }


  test(): void {
    console.log(this.personelId);
  }
}
