import {
    ChangeDetectorRef,
    Component,
    EventEmitter,
    Input,
    OnChanges,
    Output,
    SimpleChanges,
    ViewChild
} from '@angular/core';
import {DxDataGridComponent} from "devextreme-angular";
import notify from "devextreme/ui/notify";
import CustomStore from "devextreme/data/custom_store";
import {UtilService} from "../../../../../../shared/util.service";
import {GenericDataSourceService} from "../../../../../../shared/data-source/generic-data-source.service";
import {GenericDataSourceFileService} from "../../../../../../shared/data-source/generic-data-source-file.service";
import {GenericService} from "../../../../../../shared/generic.service";

@Component({
    selector: 'app-profiles',
    templateUrl: './profiles.component.html',
    styleUrls: ['./profiles.component.scss']
})
export class ProfilesComponent implements OnChanges {
    @Input() workerData: any;
    @Output() onHidingPopup: EventEmitter<any> = new EventEmitter<any>();

    workerGetData: any;
    profileDataSource: any = {};
    workerProfileDataSource: any = {};
    @ViewChild('profileDataGrid', {static: true}) profileDataGrid: DxDataGridComponent | undefined;
    @ViewChild('workerProfileDataGrid', {static: true}) workerProfileDataGrid: DxDataGridComponent | undefined;
    popupVisible = false;
    workerProfileService: GenericService;
    events: Array<string> = [];
    workerId: any;
    workerLabel: any;

    constructor(private cd: ChangeDetectorRef,
                private genericDataSourceService: GenericDataSourceService,
                private genericDataSourceFileService: GenericDataSourceFileService,
                private genericService: GenericService) {
        this.addProfile = this.addProfile.bind(this);
        this.deleteProfile = this.deleteProfile.bind(this);

        this.profileDataSource = genericDataSourceFileService.instance('profiles');
        this.workerProfileDataSource = genericDataSourceFileService.instance('workerprofiles');
        this.workerProfileService = genericService.instance('workerprofiles');
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.workerGetData = this.workerData;
        this.workerId = this.workerData ? this.workerData.id : null;
        this.workerLabel = this.workerData ? this.workerData.person.name + ' ' + this.workerData.person.surName : '';
        this.popupVisible = true;
        this.loadWorkerProfile();
    }


    loadWorkerProfile() {
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
                return this.workerProfileService.findOne(key).then((response) => {
                    return response;
                });
            },
            remove: (key) => {
                return this.workerProfileService.delete(key).then((response) => {
                        return;
                    },
                    err => {
                        const message = 'Kayıt Silme Hatası: ' + err.error.errorMessage;
                        notify(message);
                    }
                );
            }
        });
    }


    async addProfile(e: any) {
        const dto = {
            worker: {id: this.workerId},
            profile: {id: e.row.data.id}
        };

        this.workerProfileService.save(dto).then((response: any) => {
                this.loadWorkerProfile();
                this.refreshPersonDataGrid();
            },
            err => {
                throw (err.error.errorMessage ? err.error.errorMessage : err.error.warningMessage);
            });

    }

    deleteProfile(e: any) {
        this.workerProfileService.delete(e.row.data.id).then((response: any) => {
                this.loadWorkerProfile();
                this.refreshPersonDataGrid();
            },
            err => {
                const message = 'Kayıt Silme Hatası: ' + err.error.errorMessage;
                console.log(message);
            }
        );
    }

    refreshDataGrid() {
        this.profileDataGrid?.instance.refresh();
    }

    refreshPersonDataGrid() {
        this.workerProfileDataGrid?.instance.refresh();
    }


}
