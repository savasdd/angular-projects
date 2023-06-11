import { Component, OnInit } from '@angular/core';
import { PYS_URL } from "../../../service/pys.url"
import { PysService } from "../../../service/pys.service";
import { CustomCombo } from "../../../model/CustomCombo";
import { ToastType } from "../../../model/ToastType";

@Component({
  selector: 'app-rapor-kod-list',
  templateUrl: './rapor-kod-list.component.html',
  styleUrls: ['./rapor-kod-list.component.scss']
})
export class RaporKodListComponent implements OnInit {
  islemList: Array<CustomCombo> = [];
  kodList: Array<CustomCombo> = [];
  islem = null;
  kod = null;

  constructor(private service: PysService) { }

  ngOnInit(): void {
    this.islemList = this.service.getWebKod(PYS_URL.KOD_GET_BY_USTKOD + 9813);
    this.kodList = this.service.getKod(PYS_URL.KOD_GET_ALL);
  }

  sorgula(): void {
    const params = {
      kodId: null,
      ustKodId: this.kod
    };

    if (this.islem == null)
      this.service.showToast(ToastType.error, "Uyarı", "İşlem Türü Seçin!");
    else if (this.kod == null)
      this.service.showToast(ToastType.error, "Uyarı", "Üst Kod Seçin!");
    else {
      this.service.RAPOR(PYS_URL.GNL_RAPOR, this.islem, 'IKMKOD', 'Kod', params);
    }
  }

  onIslem(id: CustomCombo): void {
    if (id) {
      this.islem = id.value;
    }
    else
      this.islem = null;
  }

  onKod(id: CustomCombo): void {
    if (id) {
      this.kod = id.value;
    } else
      this.kod = null;
  }

}
