import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import DataSource from 'devextreme/data/data_source';
import CustomStore from 'devextreme/data/custom_store';
import {GenericService} from '../generic.service';
import {UtilService} from '../util.service';

@Injectable({
    providedIn: 'root'
})
export class GenericDataSourceService {
    constructor(private http: HttpClient) {
    }

    instance(rootPath: string): DataSource {
        const genericService = new GenericService(this.http);
        const service = genericService.instance(rootPath);
        return new DataSource(
            {
                store: new CustomStore({
                    key: 'id',
                    load: (loadOptions) => {
                        return service.findAll(UtilService.setPage(loadOptions)).then((response: any) => {
                            return {
                                data: response.items,
                                totalCount: response.totalCount
                            };
                        });
                    },

                    byKey: (key) => {
                        return service.findOne(key).then((response) => {
                            return response;
                        });
                    },

                    insert: (values) => {
                        return service.save(values).then((response) => {
                                return;
                            },
                            err => {
                                throw (err.error.errorMessage ? err.error.errorMessage : err.error.warningMessage);
                            }
                        );
                    },
                    update: (key, values) => {
                        values['id'] = key;
                        return service.update(values).then((response) => {
                                return;
                            },
                            err => {
                                throw (err.error.errorMessage ? err.error.errorMessage : err.error.warningMessage);
                            }
                        );
                    },
                    remove: (key) => {
                        return service.delete(key).then((response) => {
                                return;
                            },
                            err => {
                                throw (err.error.errorMessage ? err.error.errorMessage : err.error.warningMessage);
                            }
                        );
                    }

                })
            }
        );
    }
}
