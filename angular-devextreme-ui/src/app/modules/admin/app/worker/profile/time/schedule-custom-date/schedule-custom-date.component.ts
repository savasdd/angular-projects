import {ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import CustomStore from "devextreme/data/custom_store";
import {UtilService} from "../../../../../../../shared/util.service";
import {GenericService} from "../../../../../../../shared/generic.service";
import {GenericDataSourceService} from "../../../../../../../shared/data-source/generic-data-source.service";
import {GenericDataSourceFileService} from "../../../../../../../shared/data-source/generic-data-source-file.service";
import {DayTypesEnum} from "../../../../../../../shared/enums/day-types-enum";

@Component({
    selector: 'app-schedule-custom-date',
    templateUrl: './schedule-custom-date.component.html',
    styleUrls: ['./schedule-custom-date.component.scss']
})
export class ScheduleCustomDateComponent implements OnChanges {
    @Input() profileData: any;
    @Input() dataParamSchedule: any;
    @Output() refreshAllGrid: EventEmitter<any> = new EventEmitter<any>();

    scheduleService: GenericService;
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

        this.customTimeDataSource = genericDataSourceFileService.instance('profileschedules');
        this.scheduleService = genericService.instance('profileschedules');
        this.profileService = genericService.instance('profiles');
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.profileGetData = this.profileData;
        this.profileId = this.profileData ? this.profileData.id : null;
        this.parameterId = this.dataParamSchedule ? this.dataParamSchedule : null;
        this.isvalid = this.profileData.schedularParam != undefined && this.profileData.schedularParam.id == DayTypesEnum.CUSTOM ? this.priorities[0] : this.priorities[2];

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
                return this.scheduleService.findAll(UtilService.setPage(loadOptions)).then((response: any) => {
                    return {
                        data: response.items,
                        totalCount: response.totalCount
                    };
                });
            },
            byKey: (key) => {
                return this.scheduleService.findOne(key).then((response: any) => {
                    return response;
                });
            },

            insert: (values) => {
                values.dayType = {id: DayTypesEnum.CUSTOM};
                values.profile = {id: this.profileId};
                return this.scheduleService.save(values).then((response: any) => {
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
                return this.scheduleService.update(values).then((response: any) => {
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
                return this.scheduleService.delete(key).then((response: any) => {
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

    logEvent(eventName: any) {
        this.events.unshift(eventName);
    }


    updateProfile(dayType: any) {
        this.profileGetData.dayType = dayType;
        this.profileGetData.schedularParam = {id: this.parameterId};

        this.profileService.customPost('updates', this.profileGetData).then(res => {
        }, err => {
            throw (err.error.errorMessage ? err.error.errorMessage : err.error.warningMessage);
        });
    }

}
