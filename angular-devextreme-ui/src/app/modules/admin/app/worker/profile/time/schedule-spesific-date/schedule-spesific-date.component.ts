import {ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {GenericService} from "../../../../../../../shared/generic.service";
import {GenericDataSourceService} from "../../../../../../../shared/data-source/generic-data-source.service";
import {GenericDataSourceFileService} from "../../../../../../../shared/data-source/generic-data-source-file.service";
import {DayTypesEnum} from "../../../../../../../shared/enums/day-types-enum";
import {DaysEnum} from "../../../../../../../shared/enums/days-enum";

@Component({
    selector: 'app-schedule-spesific-date',
    templateUrl: './schedule-spesific-date.component.html',
    styleUrls: ['./schedule-spesific-date.component.scss']
})
export class ScheduleSpesificDateComponent implements OnChanges {
    @Input() profileData: any;
    @Input() dataParamSchedule: any;
    @Output() refreshAllGrid: EventEmitter<any> = new EventEmitter<any>();

    scheduleService: GenericService;
    profileService: GenericService;
    profileGetData: any;
    events: Array<string> = [];
    profileId: any;
    parameterId: any;
    isvalid: any;
    priorities = [{id: 0, text: 'AKTİF'}];

    fullTimeStart: any;
    fullTimeEnd: any;
    isMonday = false;
    isTuesday = false;
    isWednesday = false;
    isThursday = false;
    isFriday = false;
    isSaturday = false;
    isSunday = false;

    constructor(private genericDataSourceService: GenericDataSourceService,
                private genericDataSourceFileService: GenericDataSourceFileService,
                private genericService: GenericService,
                private cd: ChangeDetectorRef) {

        this.scheduleService = genericService.instance('profileschedules');
        this.profileService = genericService.instance('profiles');

    }

    ngOnChanges(changes: SimpleChanges): void {
        this.profileGetData = this.profileData;
        this.profileId = this.profileData ? this.profileData.id : null;
        this.parameterId = this.dataParamSchedule ? this.dataParamSchedule : null;
        this.isvalid = this.profileData.schedularParam != undefined && this.profileData.schedularParam.id == DayTypesEnum.SPDATE ? this.priorities[0] : this.priorities[2];

        this.loadCustomData();
    }

    loadCustomData() {
        const param = {
            profile: this.profileId,
            dayType: DayTypesEnum.SPDATE
        };

        this.scheduleService.customPost('customdates/all', param).then((result: any) => {
            result.map((m: any) => {
                if (m.day == DaysEnum.isMonday) {
                    this.isMonday = m.isValid;
                }
                if (m.day == DaysEnum.isTuesday) {
                    this.isTuesday = m.isValid;
                }
                if (m.day == DaysEnum.isWednesday) {
                    this.isWednesday = m.isValid;
                }
                if (m.day == DaysEnum.isThursday) {
                    this.isThursday = m.isValid;
                }
                if (m.day == DaysEnum.isFriday) {
                    this.isFriday = m.isValid;
                }
                if (m.day == DaysEnum.isSaturday) {
                    this.isSaturday = m.isValid;
                }
                if (m.day == DaysEnum.isSunday) {
                    this.isSunday = m.isValid;
                }

                if (m.isValid) {
                    this.fullTimeStart = m.fullTimeStart;
                    this.fullTimeEnd = m.fullTimeEnd;
                }
            });
        }, err => {
            throw (err.error.errorMessage ? err.error.errorMessage : err.error.warningMessage);
        });
    }

    onMondayChanged($event: any) {
        this.isMonday = !!$event.value;
    }

    onTuesdayChanged($event: any) {
        this.isTuesday = !!$event.value;
    }

    onWednesdayChanged($event: any) {
        this.isWednesday = !!$event.value;
    }

    onThursdayChanged($event: any) {
        this.isThursday = !!$event.value;
    }

    onFridayChanged($event: any) {
        this.isFriday = !!$event.value;
    }

    onSaturdayChanged($event: any) {
        this.isSaturday = !!$event.value;
    }

    onSundayChanged($event: any) {
        this.isSunday = !!$event.value;
    }

    onStartTimeChanged($event: any) {
        this.fullTimeStart = $event.value;
    }

    onEndedTimeChanged($event: any) {
        this.fullTimeEnd = $event.value;
    }

    insert() {
        const timeList: never[] = [];

        this.pushTimeList(DaysEnum.isMonday, this.isMonday, timeList);
        this.pushTimeList(DaysEnum.isTuesday, this.isTuesday, timeList);
        this.pushTimeList(DaysEnum.isWednesday, this.isWednesday, timeList);
        this.pushTimeList(DaysEnum.isThursday, this.isThursday, timeList);
        this.pushTimeList(DaysEnum.isFriday, this.isFriday, timeList);
        this.pushTimeList(DaysEnum.isSaturday, this.isSaturday, timeList);
        const list = this.pushTimeList(DaysEnum.isSunday, this.isSunday, timeList);

        this.scheduleService.customPost('customdates', list).then(res => {
        }, err => {
            throw (err.error.errorMessage ? err.error.errorMessage : err.error.warningMessage);
        });
        this.refreshAllGrid.emit(null);
    }

    pushTimeList(name: any, valid: any, timeList: any): any {
        timeList.push({
            dayType: {id: DayTypesEnum.SPDATE},
            profile: {id: this.profileId},
            day: name,
            isValid: valid,
            fullTimeStart: this.fullTimeStart != undefined ? this.fullTimeStart : null,
            fullTimeEnd: this.fullTimeEnd != undefined ? this.fullTimeEnd : null,
        });

        return timeList;
    }

    protected readonly DaysEnum = DaysEnum;
}
