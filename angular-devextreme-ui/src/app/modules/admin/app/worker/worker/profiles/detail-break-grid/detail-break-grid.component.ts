import {AfterViewInit, ChangeDetectorRef, Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import CustomStore from 'devextreme/data/custom_store';
import {UtilService} from "../../../../../../../shared/util.service";
import {GenericService} from "../../../../../../../shared/generic.service";
import {GenericDataSourceService} from "../../../../../../../shared/data-source/generic-data-source.service";
import {GenericDataSourceFileService} from "../../../../../../../shared/data-source/generic-data-source-file.service";
import {DayTypesEnum} from "../../../../../../../shared/enums/day-types-enum";

@Component({
    selector: 'app-detail-break-grid',
    templateUrl: './detail-break-grid.component.html',
    styleUrls: ['./detail-break-grid.component.css']
})
export class DetailBreakGridComponent implements AfterViewInit, OnChanges {
    @Input() key: any;
    profileDetailDataSource: any = {};
    profileBreakService: GenericService;
    height: any;
    profileId: any;
    isSpesific = false;
    isCustom = false;

    constructor(private genericDataSourceService: GenericDataSourceService,
                private genericDataSourceFileService: GenericDataSourceFileService,
                private genericService: GenericService,
                private cd: ChangeDetectorRef) {
        this.height = '100%';

        this.profileDetailDataSource = genericDataSourceFileService.instance('profilebreaks');
        this.profileBreakService = genericService.instance('profilebreaks');
        this.loadProfileBreakDetail();
    }

    ngOnChanges(changes: SimpleChanges): void {
        const paramId = this.key.data.breakParam != undefined ? this.key.data.breakParam.id : undefined;
        this.profileId = this.key.data != undefined ? this.key.data.id : null;
        this.isSpesific = paramId != undefined && paramId == DayTypesEnum.SPESIFIC;
        this.isCustom = paramId != undefined && paramId == DayTypesEnum.CUSTOM || paramId == DayTypesEnum.SPDATE;
    }

    loadProfileBreakDetail() {
        this.profileDetailDataSource = new CustomStore({
            key: 'id',
            load: (loadOptions) => {
                loadOptions.filter = [];
                loadOptions.filter.push(['profile.id', '=', this.profileId]);
                loadOptions.filter.push('and');
                loadOptions.filter.push(['isValid', '=', true]);
                return this.profileBreakService.findAll(UtilService.setPage(loadOptions)).then((response: any) => {
                    return {
                        data: response.items,
                        totalCount: response.totalCount
                    };
                });
            },

            byKey: (key) => {
                return this.profileBreakService.findOne(key).then((response) => {
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
