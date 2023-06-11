import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {LoginInterface} from "../../security/login-interface";
import {Router} from "@angular/router";
import {IzinService} from "../../security/izin.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {KullaniciService} from "../../shared/service/kullanici.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  girisI: LoginInterface;

  constructor(private router: Router, private service: IzinService, private msb: MatSnackBar, private kService: KullaniciService, private ref: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.girisI = {kullaniciAdi: '', sifre: ''}
  }

  giris() {
    const giris = this.service.girisKontrol(this.girisI);
    if (!giris) {
      this.msb.open('Kullanıcı adı ve şifrenizi kontrol ediniz', 'Uyarı', {duration: 3000});
      this.ref.detectChanges();
    } else {
      this.router.navigate(['/home']);
      this.ref.detectChanges();
    }
  }


}
