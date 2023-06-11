import {environment} from "../../../environments/environment";

export class KullaniciConst {
  static listUrl = environment.baseUrl + '/kullanici/list';
  static getUrl = environment.baseUrl + '/kullanici/get/';
  static addUrl = environment.baseUrl + 'tahsilat/add';
  static updateUrl = environment.baseUrl + 'tahsilat/update';
  static deleteUrl = environment.baseUrl + 'tahsilat/delete';
}
