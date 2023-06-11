import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, ViewChild} from '@angular/core';
import {DxDataGridComponent} from "devextreme-angular";
import {GenericService} from "../../../../../../shared/generic.service";
import {GenericDataSourceService} from "../../../../../../shared/data-source/generic-data-source.service";
import {GenericDataSourceFileService} from "../../../../../../shared/data-source/generic-data-source-file.service";
import CustomStore from "devextreme/data/custom_store";
import {UtilService} from "../../../../../../shared/util.service";

@Component({
    selector: 'app-activity-detail',
    templateUrl: './activity-detail.component.html',
    styleUrls: ['./activity-detail.component.scss']
})
export class ActivityDetailComponent implements OnChanges {
    @Input() workerData: any;
    @ViewChild('activityDataGrid', {static: true}) activityDataGrid: DxDataGridComponent | undefined;
    @Output() onHidingPopup: EventEmitter<any> = new EventEmitter<any>();

    popupVisible = false;
    workerGetData: any;
    workerId: any;
    activityDataSource: any = {};
    paramDataSource: any = {};
    deviceDataSource: any = {};
    workerProfileDataSource: any = {};
    paramService: GenericService;
    workerProfileService: GenericService;
    activityService: GenericService;
    events: Array<string> = [];
    dataLabel: any;

    constructor(private genericDataSourceService: GenericDataSourceService,
                private genericDataSourceFileService: GenericDataSourceFileService,
                private genericService: GenericService) {
        this.locationDataParam = this.locationDataParam.bind(this);
        this.getDataDevice = this.getDataDevice.bind(this);
        this.getDataWorkerProfile = this.getDataWorkerProfile.bind(this);

        this.paramDataSource = genericDataSourceFileService.instance('parameters');
        this.paramService = genericService.instance('parameters');
        this.deviceDataSource = genericDataSourceFileService.instance('devices').store();
        this.workerProfileDataSource = genericDataSourceFileService.instance('workerprofiles');
        this.workerProfileService = genericService.instance('workerprofiles');
        this.activityDataSource = genericDataSourceFileService.instance('workeractivitys');
        this.activityService = genericService.instance('workeractivitys');

    }

    ngOnChanges(changes: SimpleChanges): void {
        this.popupVisible = true;
        this.workerGetData = this.workerData;
        this.workerId = this.workerData ? this.workerData.id : null;
        this.dataLabel = this.workerData ? "Worker Activity - " + this.workerData.person.name + ' ' + this.workerData.person.surName : '';
        this.loadActivityType();
        this.loadWorkerProfile();
        this.loadActivityGrid();
    }

    private loadActivityType() {
        this.paramDataSource = new CustomStore({
            key: 'id',
            load: (loadOptions) => {
                loadOptions.filter = [];
                loadOptions.filter.push(['code', '=', "ACTIVITY_TYPE_24"]);
                return this.paramService.findAll(UtilService.setPage(loadOptions)).then((response: any) => {
                    return {
                        data: response.items,
                        totalCount: response.totalCount
                    };
                });
            },

            byKey: (key) => {
                return this.paramService.findOne(key).then((response: any) => {
                    return response;
                });
            },
        });
    }

    private loadWorkerProfile() {
        this.workerProfileDataSource = new CustomStore({
            key: 'id',
            load: (loadOptions) => {
                loadOptions.filter = [];
                loadOptions.filter.push(['worker.id', '=', this.workerId]);
                return this.workerProfileService.findAll(UtilService.setPage(loadOptions)).then((response: any) => {
                    return {
                        data: response.items,
                        totalCount: response.totalCount
                    };
                });
            },

            byKey: (key) => {
                return this.workerProfileService.findOne(key).then((response: any) => {
                    return response;
                });
            },
        });
    }

    locationDataParam(options): any {
        return {
            store: this.paramDataSource,
            sort: [{selector: 'id', desc: false}],
            select: ['id', 'name']
        };
    }

    getDataDevice(options): any {
        return {
            store: this.deviceDataSource,
            sort: [{selector: 'id', desc: false}],
            select: ['id', 'macAddress']
        };
    }

    getDataWorkerProfile(options): any {
        return {
            store: this.workerProfileDataSource,
            sort: [{selector: 'id', desc: false}],
            select: ['id', 'profile.name']
        };
    }

    loadActivityGrid() {
        const position = {
            Timestamp: new Date(),
            Latitude: 1.0,
            Longitude: 1.0,
            Altitude: 0.0,
            Accuracy: 0.0,
            AltitudeAccuracy: null,
            Heading: 0.0,
            Speed: 0.0
        }

        this.activityDataSource = new CustomStore({
            key: 'id',
            load: (loadOptions) => {
                loadOptions.filter = [];
                loadOptions.filter.push(['workerProfile.worker.id', '=', this.workerId]);
                return this.activityService.findAll(UtilService.setPage(loadOptions)).then((response: any) => {
                    return {
                        data: response.items,
                        totalCount: response.totalCount
                    };
                });
            },
            byKey: (key) => {
                return this.activityService.findOne(key).then((response: any) => {
                    return response;
                });
            },

            insert: (values) => {
                values.worker = {id: this.workerId};
                //values.position = position;
                return this.activityService.save(values).then((response: any) => {
                        return;
                    },
                    err => {
                        throw (err.error.errorMessage ? err.error.errorMessage : err.error.warningMessage);
                    }
                );
            },
            update: (key, values: any) => {
                values.id = key;
                values.worker = {id: this.workerId};
                return this.activityService.update(values).then((response: any) => {
                        return;
                    },
                    err => {
                        const message = 'Kayıt Güncelleme Hatası: ' + err.error.errorMessage;
                        console.log(message);
                    }
                );
            },
            remove: (key) => {
                return this.activityService.delete(key).then((response: any) => {
                        return;
                    },
                    err => {
                        const message = 'Kayıt Silme Hatası: ' + err.error.errorMessage;
                        console.log(message);
                    }
                );
            }
        });
    }

}
