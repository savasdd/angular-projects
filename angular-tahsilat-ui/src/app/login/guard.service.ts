import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {IzinService} from "../security/izin.service";

@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate {

  constructor(private router: Router, private service: IzinService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const giris = this.service.kullaniciGisi();
    if (!giris) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
