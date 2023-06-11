import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {firstValueFrom, Observable} from 'rxjs';
import {Parameter, ParameterControllerService} from "../index";

@Injectable({
    providedIn: 'root'
})
export class ParameterService {
    private baseUrl: string;

    constructor(private http: HttpClient, private service: ParameterControllerService) {
    }

    findOne(id): any {
        return this.service.findOneParam(id);
    }

    findAll(loadOptions): any {
        return firstValueFrom(this.service.getAllParam(loadOptions));
    }


    findAllByCode(code: any): Observable<Parameter[]> {
        return this.service.getByCodeParameter(code);
    }

    findAllParam(): any {
        return firstValueFrom(this.service.findAllParam());
    }

    save(data): any {
        return firstValueFrom(this.service.createParam(data));
    }

    update(id, data): any {
        return firstValueFrom(this.service.updateParam(id, data));
    }

    delete(key): any {
        return firstValueFrom(this.service.deleteParam(key));
    }

}
