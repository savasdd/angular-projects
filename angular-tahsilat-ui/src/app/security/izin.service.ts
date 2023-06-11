import {Injectable} from '@angular/core';
import {Observable, Subject} from "rxjs";
import {LoginInterface} from "./login-interface";
import {KullaniciService} from "../shared/service/kullanici.service";
import {Kullanici} from "../shared/domain/Kullanici";
import {HttpErrorResponse} from "@angular/common/http";
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class IzinService {
  private girisTemp: boolean;
  private giriskaynak = new Subject<boolean>();
  kullDto: Kullanici;

  constructor(private service: KullaniciService, private msb: MatSnackBar) {
    this.girisTemp = false;
  }

  kullaniciGisi(): boolean {
    return !!this.girisTemp;
  }

  public girisKontrol(girisI: LoginInterface): boolean {

    this.service.getById("1").subscribe(data => {
      if (girisI.kullaniciAdi === data.kullaniciAdi && girisI.sifre ===
        data.sifre
      ) {
        this.giriskaynak.next(true);
        this.girisTemp = true;
      } else {
        this.giriskaynak.next(false);
        this.girisTemp = false;
      }
    }, (error: HttpErrorResponse) => {
      this.showError(error);
    });

    /* if (girisI.kullaniciAdi === "sdede" && girisI.sifre === "123") {
       this.giriskaynak.next(true)
       this.girisTemp = true;
     } else {
       this.giriskaynak.next(false);
       this.girisTemp = false;
     }*/
    return this.girisTemp;
  }

  girisObservable(): Observable<boolean> {
    return this.giriskaynak.asObservable();
  }

  cikisYap() {
    this.girisTemp = false;
    this.giriskaynak.next(false);
  }

  showError(hata: HttpErrorResponse) {
    let mesaj = '';
    if (hata.error instanceof ErrorEvent) {
      mesaj = `Client Hatası: ${hata.error.message}`;
      this.msb.open(mesaj, 'Uyarı', {duration: 3000})
    } else {
      mesaj = `${hata.status}\nHata Mesajı: ${hata.error.message}`;
      this.msb.open('Server Hatası ' + mesaj, 'Uyarı', {duration: 3000})
    }
  }
}
