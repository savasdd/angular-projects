import {ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import CustomStore from "devextreme/data/custom_store";
import {UtilService} from "../../../../../../../shared/util.service";
import {GenericService} from "../../../../../../../shared/generic.service";
import {GenericDataSourceService} from "../../../../../../../shared/data-source/generic-data-source.service";
import {GenericDataSourceFileService} from "../../../../../../../shared/data-source/generic-data-source-file.service";
import {DayTypesEnum} from "../../../../../../../shared/enums/day-types-enum";

@Component({
    selector: 'app-break-custom-date',
    templateUrl: './break-custom-date.component.html',
    styleUrls: ['./break-custom-date.component.scss']
})
export class BreakCustomDateComponent implements OnChanges {
    @Input() profileData: any;
    @Input() dataParamBreak: any;
    @Input() breakId: any;
    @Output() refreshAllGrid: EventEmitter<any> = new EventEmitter<any>();

    breakService: GenericService;
    profileService: GenericService;
    customTimeDataSource: any = {};
    profileGetData: any;
    events: Array<string> = [];
    profileId: any;
    parameterId: any;
    isvalid: any;
    priorities = [{id: 0, text: 'AKTİF'}];

    constructor(private genericDataSourceService: GenericDataSourceService,
                private genericDataSourceFileService: GenericDataSourceFileService,
                private genericService: GenericService,
                private cd: ChangeDetectorRef) {

        this.customTimeDataSource = genericDataSourceFileService.instance('profilebreaks');
        this.breakService = genericService.instance('profilebreaks');
        this.profileService = genericService.instance('profiles');
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.profileGetData = this.profileData;
        this.profileId = this.profileData ? this.profileData.id : null;
        this.parameterId = this.dataParamBreak ? this.dataParamBreak : null;
        this.isvalid = this.profileData.breakParam != undefined && this.profileData.breakParam.id == DayTypesEnum.CUSTOM ? this.priorities[0] : this.priorities[2];

        this.loadCustomTimeGrid();
    }


    loadCustomTimeGrid() {
        this.customTimeDataSource = new CustomStore({
            key: 'id',
            load: (loadOptions) => {
                loadOptions.filter = [];
                loadOptions.filter.push(['dayType.id', '=', DayTypesEnum.CUSTOM]);
                loadOptions.filter.push('and');
                loadOptions.filter.push(['profile.id', '=', this.profileId]);
                loadOptions.filter.push('and');
                loadOptions.filter.push(['breakType.id', '=', this.breakId]);
                return this.breakService.findAll(UtilService.setPage(loadOptions)).then((response: any) => {
                    return {
                        data: response.items,
                        totalCount: response.totalCount
                    };
                });
            },
            byKey: (key) => {
                return this.breakService.findOne(key).then((response: any) => {
                    return response;
                });
            },

            insert: (values) => {
                values.dayType = {id: DayTypesEnum.CUSTOM};
                values.profile = {id: this.profileId};
                values.breakType = {id: this.breakId != undefined ? this.breakId : null};
                return this.breakService.save(values).then((response: any) => {
                        //this.updateProfile(DayTypeEnum.Custom);
                        this.refreshAllGrid.emit(null);
                        return;
                    },
                    err => {
                        throw (err.error.errorMessage ? err.error.errorMessage : err.error.warningMessage);
                    }
                );
            },
            update: (key, values: any) => {
                values.id = key;
                values.dayType = {id: DayTypesEnum.CUSTOM};
                values.profile = {id: this.profileId};
                values.breakType = {id: this.breakId != undefined ? this.breakId : null};
                return this.breakService.update(values).then((response: any) => {
                        //this.updateProfile(DayTypeEnum.Custom);
                        this.refreshAllGrid.emit(null);
                        return;
                    },
                    err => {
                        const message = 'Kayıt Güncelleme Hatası: ' + err.error.errorMessage;
                        console.log(message);
                    }
                );
            },
            remove: (key) => {
                return this.breakService.delete(key).then((response: any) => {
                        this.refreshAllGrid.emit(null);
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

    async updateProfile(dayType: any) {
        this.profileGetData.dayType = dayType;
        this.profileGetData.breakParam = {id: this.parameterId};

        this.profileService.customPost('updates', this.profileGetData).then(res => {
        }, err => {
            throw (err.error.errorMessage ? err.error.errorMessage : err.error.warningMessage);
        });
    }

    logEvent(eventName: any) {
        this.events.unshift(eventName);
    }

}
