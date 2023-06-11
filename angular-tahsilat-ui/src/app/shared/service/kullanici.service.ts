import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Kullanici} from "../domain/Kullanici";
import {KullaniciConst} from "../const/Const";

@Injectable({
  providedIn: 'root'
})
export class KullaniciService {

  constructor(private http: HttpClient) {
  }

  getList(): Observable<Kullanici[]> {
    let headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.get<Kullanici[]>(KullaniciConst.listUrl, {headers});
  }

  getById(id: string): Observable<Kullanici> {
    let headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.get<Kullanici>(KullaniciConst.getUrl + id, {headers});
  }

  add(kullanici: Kullanici) {
    let headers = new HttpHeaders({'Content-Type': 'application/json'});
    if (kullanici.id) {
      this.http.put<Kullanici>(KullaniciConst.updateUrl + kullanici.id, kullanici);
    } else {
      this.http.post<Kullanici>(KullaniciConst.addUrl, kullanici);
    }
  }

  delete(id: string) {
    this.http.delete(KullaniciConst.deleteUrl + id);
  }


}
