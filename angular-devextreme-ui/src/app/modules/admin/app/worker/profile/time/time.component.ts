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
import {GenericDataSourceService} from "../../../../../../shared/data-source/generic-data-source.service";
import {GenericDataSourceFileService} from "../../../../../../shared/data-source/generic-data-source-file.service";
import {GenericService} from "../../../../../../shared/generic.service";
import {DxDataGridComponent} from "devextreme-angular";
import {DayTypesEnum} from "../../../../../../shared/enums/day-types-enum";

@Component({
    selector: 'app-time',
    templateUrl: './time.component.html',
    styleUrls: ['./time.component.scss']
})
export class TimeComponent implements OnChanges {
    @Input() profileData: any;
    @Input() dayTypeData: any;
    @Output() onHidingPopup: EventEmitter<any> = new EventEmitter<any>();
    @ViewChild('profileBreakGrid', {static: true}) profileBreakGrid: DxDataGridComponent | undefined;

    parameterService: GenericService;
    breakService: GenericService;
    profileService: GenericService;
    profileGetData: any;
    popupVisible = false;
    events: Array<string> = [];
    profileId: any;
    breakId: any;
    dataLabel: any;
    breakList: any;
    dataParamSchedule: any;
    dataParamBreak: any;
    dataInfo: any;
    pSpesificTimeVisible = false;
    pSpesificDateVisible = false;
    pCustomDateVisible = false;
    bSpesificTimeVisible = false;
    bSpesificDateVisible = false;
    bCustomDateVisible = false;
    scheduleValue: any;
    scheduleBreakValue: any;
    scheduleList: any;

    constructor(private genericDataSourceService: GenericDataSourceService,
                private genericDataSourceFileService: GenericDataSourceFileService,
                private genericService: GenericService,
                private cd: ChangeDetectorRef) {
        this.scheduleValueChanged = this.scheduleValueChanged.bind(this);
        this.breakService = this.genericService.instance("breaks");
        this.profileService = genericService.instance('profiles');
        this.parameterService = this.genericService.instance("parameters");
        this.getScheduleData();
        this.getBreakData();
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.profileGetData = this.profileData;
        this.profileId = this.profileData ? this.profileData.id : null;
        this.dataInfo = this.profileData ? this.profileData.name : '';
        this.dataLabel = this.dataInfo;
        this.popupVisible = true;

        this.scheduleValueChanged(this.profileGetData.schedularParam != undefined ? this.profileGetData.schedularParam.id : undefined)
        this.scheduleValue = this.profileGetData.schedularParam != undefined ? this.profileGetData.schedularParam.id : null;
        this.scheduleBreakValueChanged(this.profileGetData.breakParam != undefined ? this.profileGetData.breakParam.id : undefined)
        this.scheduleBreakValue = this.profileGetData.breakParam != undefined ? this.profileGetData.breakParam.id : null;
    }

    getScheduleData() {
        this.parameterService.customGet('code/' + 'SCHEDULE_23').then(result => {
            this.scheduleList = result;
        }, err => {
        });
    }

    getBreakData() {
        this.breakService.customGet('findAll').then(result => {
            this.breakList = result;
        }, err => {
        });
    }

    logEvent(eventName: any) {
        this.events.unshift(eventName);
    }


    breakValueChanged(data) {
        this.breakId = data.value.id;
        this.profileBreakGrid?.instance.refresh();
    }

    refreshAllGrid($event: any) {
        console.log('deneme')
        this.cd.detectChanges();
    }


    scheduleValueChanged(data) {
        if (data != undefined) {
            this.dataParamSchedule = data;

            if (data == DayTypesEnum.SPESIFIC) {
                this.pSpesificTimeVisible = true;
                this.pSpesificDateVisible = false;
                this.pCustomDateVisible = false;
            } else if (data == DayTypesEnum.CUSTOM) {
                this.pSpesificTimeVisible = false;
                this.pSpesificDateVisible = false;
                this.pCustomDateVisible = true;
            } else if (data == DayTypesEnum.SPDATE) {
                this.pSpesificTimeVisible = false;
                this.pSpesificDateVisible = true;
                this.pCustomDateVisible = false;
            } else {
                this.pSpesificTimeVisible = false;
                this.pSpesificDateVisible = false;
                this.pCustomDateVisible = false;
            }
        } else {
            this.pSpesificTimeVisible = false;
            this.pSpesificDateVisible = false;
            this.pCustomDateVisible = false;
        }
    }

    scheduleBreakValueChanged(data) {
        if (data != undefined) {
            this.dataParamBreak = data;

            if (data == DayTypesEnum.SPESIFIC) {
                this.bSpesificTimeVisible = true;
                this.bSpesificDateVisible = false;
                this.bCustomDateVisible = false;
            } else if (data == DayTypesEnum.CUSTOM) {
                this.bSpesificTimeVisible = false;
                this.bSpesificDateVisible = false;
                this.bCustomDateVisible = true;
            } else if (data == DayTypesEnum.SPDATE) {
                this.bSpesificTimeVisible = false;
                this.bSpesificDateVisible = true;
                this.bCustomDateVisible = false;
            } else {
                this.bSpesificTimeVisible = false;
                this.bSpesificDateVisible = false;
                this.bCustomDateVisible = false;
            }
        } else {
            this.bSpesificTimeVisible = false;
            this.bSpesificDateVisible = false;
            this.bCustomDateVisible = false;
        }
    }

    updateScheduleProfile() {
        this.profileGetData.isValid = true;
        this.profileGetData.isSchedule = true;
        this.profileGetData.isBreak = false;
        this.profileGetData.schedularParam = {id: this.dataParamSchedule ? this.dataParamSchedule : null};

        this.profileService.customPost('updates', this.profileGetData).then(res => {
        }, err => {
            throw (err.error.errorMessage ? err.error.errorMessage : err.error.warningMessage);
        });
    }

    async updateBreakProfile() {
        this.profileGetData.isValid = true;
        this.profileGetData.isBreak = true;
        this.profileGetData.isSchedule = false;
        this.profileGetData.breakParam = {id: this.dataParamBreak ? this.dataParamBreak : null};

        this.profileService.customPost('updates', this.profileGetData).then(res => {
        }, err => {
            throw (err.error.errorMessage ? err.error.errorMessage : err.error.warningMessage);
        });
    }

    onHiding(e: any) {
        this.onHidingPopup.emit(e.data);
    }

    getDisplayExpr(item) {
        if (!item) {
            return '';
        }
        return `${item.parameter.name}`;
    }


}
