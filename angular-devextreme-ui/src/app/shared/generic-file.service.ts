import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {firstValueFrom} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GenericFileService {
  private baseUrl: string;
  constructor(private http: HttpClient) {}
  instance(rootPath: string): GenericFileService {
    const genericFileService = new GenericFileService(this.http);
    genericFileService.baseUrl = environment.apiUrl + rootPath + '/';
    return genericFileService;
  }
  findOne(id) {
    return firstValueFrom(this.http.get(this.baseUrl + 'findOne/' + id));
  }
  findAll(loadOptions) {
    return firstValueFrom(this.http.post(this.baseUrl + 'findAll', loadOptions));
  }
  save(data) {
    const file: File = data.document;
    const thumbnailFile: File = data.thumbnail;

    const formData: FormData = new FormData();
    const blobData = new Blob([JSON.stringify(data)], {type: 'application/json'});
    formData.append('data', blobData);
    if (file && file.name) {
      formData.append('file', file, file.name);
    }
    if (thumbnailFile && thumbnailFile.name) {
      formData.append('thumbnailFile', thumbnailFile, thumbnailFile.name);
    }
    return firstValueFrom(this.http.post(this.baseUrl + 'save', formData));
  }
  update(data) {
    const file: File = data.document;
    const thumbnailFile: File = data.thumbnail;
    const formData: FormData = new FormData();
    const blobData = new Blob([JSON.stringify(data)], {type: 'application/json'});
    formData.append('data', blobData);
    if (file && file.name) {
      formData.append('file', file, file.name);
    }
    if (thumbnailFile && thumbnailFile.name) {
      formData.append('thumbnailFile', thumbnailFile, thumbnailFile.name);
    }
    return firstValueFrom(this.http.put(this.baseUrl + 'update', formData));
  }
  delete(key) {
    return firstValueFrom(this.http.delete(this.baseUrl + 'delete/' +  key));
  }
  customGet(path: string) {
    return firstValueFrom(this.http.get(this.baseUrl + path));
  }
  customPost(path: string, loadOptions) {
    return firstValueFrom(this.http.post(this.baseUrl + path, loadOptions));
  }
  download(key) {
    return this.http.get(this.baseUrl + 'downloadDocument/' + key, {responseType: 'blob', observe: 'response'});
  }
}
