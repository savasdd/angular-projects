import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {firstValueFrom, Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class GenericService {
    private baseUrl: string;

    constructor(private http: HttpClient) {
    }

    instance(rootPath: string): GenericService {
        const genericService = new GenericService(this.http);
        genericService.baseUrl = environment.apiUrl + rootPath + '/';
        return genericService;
    }

    findOne(id) {
        return firstValueFrom(this.http.get(this.baseUrl + 'findOne/' + id));
    }

    findAll(loadOptions): any {
        return firstValueFrom(this.http.post(this.baseUrl + 'findAll', loadOptions));
        // return firstValueFrom(this.userService.findAll(loadOptions));
    }

    save(data) {
        return firstValueFrom(this.http.post(this.baseUrl + 'save', data));
    }

    update(data) {
        return firstValueFrom(this.http.put(this.baseUrl + 'update', data));
    }

    delete(key) {
        return firstValueFrom(this.http.delete(this.baseUrl + 'delete/' + key));
    }

    customGet(path: string):any {
        return firstValueFrom(this.http.get(this.baseUrl + path));
    }

    customPost(path: string, data) {
        return firstValueFrom(this.http.post(this.baseUrl + path, data));
    }

    customPostHttpOptions(path: string, httpOptions: any, data) {
        return firstValueFrom(this.http.post(this.baseUrl + path, data, httpOptions));
    }

    customGetHttpOptions(path: string, httpOptions: any) {
        return firstValueFrom(this.http.get(this.baseUrl + path, httpOptions));
    }

    customRawPost(path: string, data: any): Observable<any> {
        return this.http.post<any>(this.baseUrl + path, data);
    }
}
