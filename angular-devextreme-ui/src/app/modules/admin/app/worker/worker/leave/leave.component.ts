import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, ViewChild} from '@angular/core';
import {DxDataGridComponent} from "devextreme-angular";
import CustomStore from "devextreme/data/custom_store";
import {UtilService} from "../../../../../../shared/util.service";
import {GenericDataSourceService} from "../../../../../../shared/data-source/generic-data-source.service";
import {GenericDataSourceFileService} from "../../../../../../shared/data-source/generic-data-source-file.service";
import {GenericService} from "../../../../../../shared/generic.service";

@Component({
    selector: 'app-leave',
    templateUrl: './leave.component.html',
    styleUrls: ['./leave.component.scss']
})
export class LeaveComponent implements OnChanges {
    @Input() workerData: any;
    @Output() onHidingPopup: EventEmitter<any> = new EventEmitter<any>();

    popupVisible = false;
    workerGetData: any;
    workerId: any;
    leaveDataSource: any = {};
    leaveService: GenericService;
    events: Array<string> = [];
    @ViewChild('leaveDataGrid', {static: true}) leaveDataGrid: DxDataGridComponent | undefined;
    dataLabel: any;

    constructor(private genericDataSourceService: GenericDataSourceService,
                private genericDataSourceFileService: GenericDataSourceFileService,
                private genericService: GenericService) {
        this.leaveDataSource = genericDataSourceFileService.instance('workerleaves');
        this.leaveService = genericService.instance('workerleaves');
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.popupVisible = true;
        this.workerGetData = this.workerData;
        this.workerId = this.workerData ? this.workerData.id : null;
        this.dataLabel = this.workerData ? this.workerData.person.name + ' ' + this.workerData.person.surName : '';
        this.loadLeaveGrid();
    }

    loadLeaveGrid() {
        this.leaveDataSource = new CustomStore({
            key: 'id',
            load: (loadOptions) => {
                loadOptions.filter = [];
                loadOptions.filter.push(['worker.id', '=', this.workerId]);
                return this.leaveService.findAll(UtilService.setPage(loadOptions)).then((response: any) => {
                    return {
                        data: response.items,
                        totalCount: response.totalCount
                    };
                });
            },
            byKey: (key) => {
                return this.leaveService.findOne(key).then((response: any) => {
                    return response;
                });
            },

            insert: (values) => {
                values.worker = {id: this.workerId};
                return this.leaveService.save(values).then((response: any) => {
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
                return this.leaveService.update(values).then((response: any) => {
                        return;
                    },
                    err => {
                        const message = 'Kayıt Güncelleme Hatası: ' + err.error.errorMessage;
                        console.log(message);
                    }
                );
            },
            remove: (key) => {
                return this.leaveService.delete(key).then((response: any) => {
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

    logEvent(eventName: any) {
        this.events.unshift(eventName);
    }


}
