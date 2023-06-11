import {Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {GenericService} from "../../../../../../../shared/generic.service";
import {GenericDataSourceService} from "../../../../../../../shared/data-source/generic-data-source.service";
import {GenericDataSourceFileService} from "../../../../../../../shared/data-source/generic-data-source-file.service";
import CustomStore from "devextreme/data/custom_store";
import {UtilService} from "../../../../../../../shared/util.service";
import {DayTypesEnum} from "../../../../../../../shared/enums/day-types-enum";
import {DxDataGridComponent} from "devextreme-angular";

@Component({
    selector: 'app-profile-break-grid',
    templateUrl: './profile-break-grid.component.html',
    styleUrls: ['./profile-break-grid.component.scss']
})
export class ProfileBreakGridComponent implements OnChanges, OnInit {
    @Input() profileData: any;
    @Input() breakId: number;
    @ViewChild('profileBreakGrid', {static: true}) profileBreakGrid: DxDataGridComponent | undefined;
    height: any;
    profileId: any;
    isSpesific = false;
    isCustom = false;


    dataSource: any = {};
    profileBreakService: GenericService;

    constructor(private genericDataSourceService: GenericDataSourceService,
                private genericDataSourceFileService: GenericDataSourceFileService,
                private genericService: GenericService,) {
        this.height = '100%';

        this.dataSource = genericDataSourceFileService.instance('profilebreaks');
        this.profileBreakService = genericService.instance('profilebreaks');

    }

    ngOnInit(): void {
        console.log('load grid');
    }

    ngOnChanges(changes: SimpleChanges): void {
        const paramId = this.profileData.breakParam != undefined ? this.profileData.breakParam.id : undefined;
        this.profileId = this.profileData != undefined ? this.profileData.id : null;
        this.isSpesific = paramId != undefined && paramId == DayTypesEnum.SPESIFIC;
        this.isCustom = paramId != undefined && paramId == DayTypesEnum.CUSTOM || paramId == DayTypesEnum.SPDATE;
        this.loadData();
    }

    loadData() {
        this.dataSource = new CustomStore({
            key: 'id',
            load: (loadOptions) => {
                loadOptions.filter = [];
                loadOptions.filter.push(['profile.id', '=', this.profileId]);
                loadOptions.filter.push('and');
                loadOptions.filter.push(['breakType.id', '=', this.breakId]);
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

}
