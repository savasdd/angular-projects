import {Component, OnInit, ViewChild} from '@angular/core';
import {DxDataGridComponent} from "devextreme-angular";
import {ConstantService} from "../../../../../shared/constant.service";
import {GenericDataSourceService} from "../../../../../shared/data-source/generic-data-source.service";
import {GenericDataSourceFileService} from "../../../../../shared/data-source/generic-data-source-file.service";
import {GenericService} from "../../../../../shared/generic.service";

@Component({
    selector: 'app-parameter',
    templateUrl: './parameter.component.html',
    styleUrls: ['./parameter.component.scss']
})
export class ParameterComponent implements OnInit {

    dataSource: any = {};
    parameterService: GenericService;
    @ViewChild('parameterDataGrid', {static: true}) parameterDataGrid: DxDataGridComponent | undefined;

    constructor(public constantService: ConstantService,
                private genericDataSourceService: GenericDataSourceService,
                private genericDataSourceFileService: GenericDataSourceFileService,
                private fileService: GenericService) {
        this.dataSource = genericDataSourceFileService.instance('parameters');

    }

    ngOnInit(): void {
    }

    refreshDataGrid() {
        this.parameterDataGrid?.instance.refresh();
    }
}
