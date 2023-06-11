import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {ConstantService} from "../../../../../shared/constant.service";
import {DxDataGridComponent} from "devextreme-angular";
import {ProfileSchedule} from "../../../../../shared/hr-service-api";
import {GenericDataSourceService} from "../../../../../shared/data-source/generic-data-source.service";
import {GenericDataSourceFileService} from "../../../../../shared/data-source/generic-data-source-file.service";
import {GenericService} from "../../../../../shared/generic.service";
import DayTypeEnum = ProfileSchedule.DayTypeEnum;

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

    dataSource: any = {};
    @ViewChild('profileDataGrid', {static: true}) profileDataGrid: DxDataGridComponent | undefined;
    events: Array<string> = [];
    profileData: any;
    dayTypeData: any;

    constructor(public constantService: ConstantService,
                private genericDataSourceService: GenericDataSourceService,
                private genericDataSourceFileService: GenericDataSourceFileService,
                private genericService: GenericService,
                private cd: ChangeDetectorRef) {
        this.dataSource = genericDataSourceFileService.instance('profiles');
    }

    ngOnInit(): void {
    }


    callTimeOperationListPopup(d, process) {
        this.profileData = d.data;
        this.dayTypeData = process;
        this.refreshDataGrid();
    }

    onHidingNewSavePopup($event: any) {
        this.profileData = null;
        this.dayTypeData = null;
        this.refreshDataGrid();
    }

    refreshDataGrid() {
        this.profileDataGrid?.instance.refresh();
    }


    protected readonly DayTypeEnum = DayTypeEnum;
}
