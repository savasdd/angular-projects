import {AfterViewInit, ChangeDetectorRef, Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import CustomStore from 'devextreme/data/custom_store';
import {UtilService} from "../../../../../../../shared/util.service";
import {GenericService} from "../../../../../../../shared/generic.service";
import {GenericDataSourceService} from "../../../../../../../shared/data-source/generic-data-source.service";
import {GenericDataSourceFileService} from "../../../../../../../shared/data-source/generic-data-source-file.service";
import {DayTypesEnum} from "../../../../../../../shared/enums/day-types-enum";

@Component({
    selector: 'app-detail-profile-grid',
    templateUrl: './detail-profile-grid.component.html',
    styleUrls: ['./detail-profile-grid.component.css']
})
export class DetailProfileGridComponent implements AfterViewInit, OnChanges {
    @Input() key: any;
    profileDetailDataSource: any = {};
    profileTimeService: GenericService;
    height: any;
    profileId: any;
    isSpesific = false;
    isCustom = false;

    constructor(private genericDataSourceService: GenericDataSourceService,
                private genericDataSourceFileService: GenericDataSourceFileService,
                private genericService: GenericService,
                private cd: ChangeDetectorRef) {
        this.height = '100%';

        this.profileDetailDataSource = genericDataSourceFileService.instance('profileschedules');
        this.profileTimeService = genericService.instance('profileschedules');
        this.loadProfileDetail();
    }

    ngOnChanges(changes: SimpleChanges): void {
        const paramId = this.key.data.schedularParam != undefined ? this.key.data.schedularParam.id : undefined;
        this.profileId = this.key.data != undefined ? this.key.data.id : null;
        this.isSpesific = paramId != undefined && paramId == DayTypesEnum.SPESIFIC;
        this.isCustom = paramId != undefined && paramId == DayTypesEnum.CUSTOM || paramId == DayTypesEnum.SPDATE;
    }

    loadProfileDetail() {
        this.profileDetailDataSource = new CustomStore({
            key: 'id',
            load: (loadOptions) => {
                loadOptions.filter = [];
                loadOptions.filter.push(['profile.id', '=', this.profileId]);
                loadOptions.filter.push('and');
                loadOptions.filter.push(['isValid', '=', true]);
                return this.profileTimeService.findAll(UtilService.setPage(loadOptions)).then((response: any) => {
                    return {
                        data: response.items,
                        totalCount: response.totalCount
                    };
                });
            },

            byKey: (key) => {
                return this.profileTimeService.findOne(key).then((response) => {
                    return response;
                });
            }
        })
    }

    onToolbarPreparing(e) {
        e.toolbarOptions.items.unshift(
            {
                location: 'before',
                template: 'info'
            });
    }

    ngAfterViewInit(): void {
    }
}
