import {Component, OnInit, ViewChild} from '@angular/core';
import CustomStore from "devextreme/data/custom_store";
import {UtilService} from "../../../../../shared/util.service";
import {DxDataGridComponent} from "devextreme-angular";
import {GenericService} from "../../../../../shared/generic.service";
import {ConstantService} from "../../../../../shared/constant.service";
import {GenericDataSourceService} from "../../../../../shared/data-source/generic-data-source.service";
import {GenericDataSourceFileService} from "../../../../../shared/data-source/generic-data-source-file.service";

@Component({
    selector: 'app-breaktype',
    templateUrl: './breaktype.component.html',
    styleUrls: ['./breaktype.component.scss']
})
export class BreaktypeComponent implements OnInit {

    parameterService: GenericService;
    dataSource: any = {};
    paramdataSource: any = {};
    @ViewChild('breakDataGrid', {static: true}) breakDataGrid: DxDataGridComponent | undefined;

    constructor(public constantService: ConstantService,
                private genericDataSourceService: GenericDataSourceService,
                private genericDataSourceFileService: GenericDataSourceFileService,
                private genericService: GenericService) {
        this.locationData = this.locationData.bind(this);


        this.dataSource = genericDataSourceFileService.instance('breaks');
        this.paramdataSource = genericDataSourceFileService.instance('parameters');
        this.parameterService = genericService.instance('parameters');
        this.loadParam();
    }


    ngOnInit(): void {
    }

    loadParam() {
        this.paramdataSource = new CustomStore({
            key: 'id',
            load: (loadOptions) => {
                loadOptions.filter = [];
                loadOptions.filter.push(['code', '=', 'BREAK_22']);
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

    locationData(options): any {
        return {
            store: this.paramdataSource,
            sort: [{selector: 'id', desc: false}],
            select: ['id', 'name']
        };
    }

    setLocationValue(rowData: any, value: any): void {
        (this as any).defaultSetCellValue(rowData, value);
    }

}
