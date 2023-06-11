import {Component, OnInit, ViewChild} from '@angular/core';
import {DxDataGridComponent} from "devextreme-angular";
import CustomStore from "devextreme/data/custom_store";
import {UtilService} from "../../../../../shared/util.service";
import {GenericDataSourceService} from "../../../../../shared/data-source/generic-data-source.service";
import {GenericDataSourceFileService} from "../../../../../shared/data-source/generic-data-source-file.service";
import {GenericService} from "../../../../../shared/generic.service";

@Component({
    selector: 'app-device',
    templateUrl: './device.component.html',
    styleUrls: ['./device.component.scss']
})
export class DeviceComponent implements OnInit {
    dataSource: any = {};
    departmentService: GenericService;
    departmentDataSource: any = {};
    @ViewChild('deviceDataGrid', {static: true}) deviceDataGrid: DxDataGridComponent | undefined;

    constructor(private genericDataSourceService: GenericDataSourceService,
                private genericDataSourceFileService: GenericDataSourceFileService,
                private genericService: GenericService) {
        this.locationData = this.locationData.bind(this);

        this.dataSource = genericDataSourceFileService.instance('devices');
        this.departmentDataSource = genericDataSourceFileService.instance('department');
        this.departmentService = genericService.instance('department');
        this.loadDepartment();
    }

    ngOnInit(): void {
    }

    locationData(options): any {
        return {
            store: this.departmentDataSource,
            // filter: (options.data) ? ['parameter.id', '=', 1] : ['parameter.id', '=', 0],
            sort: [{selector: 'id', desc: false}],
            select: ['id', 'name']
        };
    }

    setLocationValue(rowData: any, value: any): void {
        (this as any).defaultSetCellValue(rowData, value);
    }


    private loadDepartment() {
        this.departmentDataSource = new CustomStore({
            key: 'id',
            load: (loadOptions) => {
                return this.departmentService.findAll(UtilService.setPage(loadOptions)).then((response) => {
                    return {
                        data: response.items,
                        totalCount: response.totalCount
                    };
                });
            },

            byKey: (key) => {
                return this.departmentService.findOne(key).then((response: any) => {
                    return response;
                });
            },
        });
    }


}
