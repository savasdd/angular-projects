import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {UtilService} from "../../../../../shared/util.service";
import CustomStore from "devextreme/data/custom_store";
import {PropertyComponent} from "./property/property.component";
import {DxDataGridComponent} from "devextreme-angular";
import {GenericDataSourceService} from 'app/shared/data-source/generic-data-source.service';
import {GenericDataSourceFileService} from "../../../../../shared/data-source/generic-data-source-file.service";
import {GenericService} from "../../../../../shared/generic.service";

@Component({
    selector: 'app-worker',
    templateUrl: './worker.component.html',
    styleUrls: ['./worker.component.scss']
})
export class WorkerComponent implements OnInit {
    @ViewChild(PropertyComponent, {read: PropertyComponent}) propertyComp: PropertyComponent;

    dataSource: any = {};
    personDataSource: any = {};
    departmentDataSource: any = {};
    @ViewChild('workerDataGrid', {static: true}) workerDataGrid: DxDataGridComponent | undefined;
    departmentService: GenericService;
    personService: GenericService;
    visibleProperty = false;
    workerData: any;
    workerLeaveData: any;
    workerPropertyData: any;
    workerActivityData: any;
    workerDropDownOptions: object;

    constructor(private genericDataSourceService: GenericDataSourceService,
                private genericDataSourceFileService: GenericDataSourceFileService,
                private genericService: GenericService,
                private cd: ChangeDetectorRef) {
        this.locationDataDepartment = this.locationDataDepartment.bind(this);
        this.locationDataPerson = this.locationDataPerson.bind(this);

        this.dataSource = genericDataSourceFileService.instance('workers');
        this.departmentDataSource = genericDataSourceFileService.instance('department');
        this.departmentService = genericService.instance('department');
        this.personDataSource = genericDataSourceFileService.instance('person');
        this.personService = genericService.instance('person');

        this.loadPerson();
        this.loadDepartment();
    }


    ngOnInit(): void {
    }


    locationDataPerson(options): any {
        return {
            store: this.personDataSource,
            sort: [{selector: 'id', desc: false}],
            select: ['id', 'name']
        };
    }

    locationDataDepartment(options): any {
        return {
            store: this.departmentDataSource,
            sort: [{selector: 'id', desc: false}],
            select: ['id', 'name']
        };
    }

    setLocationValue(rowData: any, value: any): void {
        (this as any).defaultSetCellValue(rowData, value);
    }

    private loadPerson() {
        this.personDataSource = new CustomStore({
            key: 'id',
            load: (loadOptions) => {
                loadOptions.filter = [];
                loadOptions.filter.push(['personType', '=', "Person"]);
                return this.personService.findAll(UtilService.setPage(loadOptions)).then((response: any) => {
                    return {
                        data: response.items,
                        totalCount: response.totalCount
                    };
                });
            },

            byKey: (key) => {
                return this.personService.findOne(key).then((response: any) => {
                    return response;
                });
            },
        });
    }

    private loadDepartment() {
        this.departmentDataSource = new CustomStore({
            key: 'id',
            load: (loadOptions) => {
                return this.departmentService.findAll(UtilService.setPage(loadOptions)).then((response: any) => {
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

    callProfileOperationListPopup(d, process) {
        this.visibleProperty = true;
        this.workerData = d.data;
        this.refreshDataGrid();
    }

    callLeaveOperationListPopup(d, process) {
        this.workerLeaveData = d.data;
        this.refreshDataGrid();
    }

    callPropertyOperationListPopup(d, process) {
        this.workerPropertyData = d.data;
        this.refreshDataGrid();
    }

    callActivityOperationListPopup(d, process) {
        this.workerActivityData = d.data;
        this.refreshDataGrid();
    }

    refreshDataGrid() {
        this.workerDataGrid?.instance.refresh();
    }

    onHidingNewSavePopup($event: any) {
        this.workerData = null;
        this.refreshDataGrid();
    }

    onSelectionPersonChanged(selectedRowKeys, cellInfo, dropDownBoxComponent) {
        cellInfo.setValue(selectedRowKeys[0]);
        if (selectedRowKeys.length > 0) {
            dropDownBoxComponent.close();
        }
    }

}
