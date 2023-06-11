import {Component, OnInit, ViewChild} from '@angular/core';
import {DxDataGridComponent} from "devextreme-angular";
import {GenericDataSourceService} from "../../../../../../shared/data-source/generic-data-source.service";
import {GenericService} from "../../../../../../shared/generic.service";
import {GenericDataSourceFileService} from "../../../../../../shared/data-source/generic-data-source-file.service";
import CustomStore from "devextreme/data/custom_store";
import {UtilService} from "../../../../../../shared/util.service";

@Component({
    selector: 'app-activity',
    templateUrl: './activity.component.html',
    styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {

    // dataSource: any = new Array({});
    dataSource: any = {};
    paramDataSource: any = {};
    activityService: GenericService;
    parameterService: GenericService;
    @ViewChild('activityDataGrid', {static: true}) activityDataGrid: DxDataGridComponent | undefined;

    constructor(private genericDataSourceService: GenericDataSourceService,
                private genericDataSourceFileService: GenericDataSourceFileService,
                private genericService: GenericService) {


        this.dataSource = genericDataSourceFileService.instance('workeractivitys');
        this.activityService = genericService.instance('workeractivitys');
        this.paramDataSource = genericDataSourceFileService.instance('parameters');
        this.parameterService = this.genericService.instance("parameters");
        this.loadActivityGrid();
        this.loadParamGrid();
    }

    ngOnInit(): void {
    }

    loadActivityGrid() {
        this.dataSource = new CustomStore({
            key: 'id',
            load: (loadOptions) => {
                return this.activityService.findAll(UtilService.setPage(loadOptions)).then((response: any) => {
                    return {
                        data: response.items,
                        totalCount: response.totalCount
                    };
                });
            },
            byKey: (key) => {
                return this.activityService.findOne(key).then((response: any) => {
                    return response;
                });
            },

        });
    }

    loadParamGrid() {
        this.paramDataSource = new CustomStore({
            key: 'id',
            load: (loadOptions) => {
                loadOptions.filter = [];
                loadOptions.filter.push(['code', '=', "ACTIVITY_TYPE_24"]);
                return this.parameterService.findAll(UtilService.setPage(loadOptions)).then((response: any) => {
                    return {
                        data: response.items,
                        totalCount: response.totalCount
                    };
                });
            },
            byKey: (key) => {
                return this.parameterService.findOne(key).then((response: any) => {
                    return response;
                });
            },

        });
    }
}
