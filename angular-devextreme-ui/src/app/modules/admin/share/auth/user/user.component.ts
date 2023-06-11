import {Component, OnInit} from '@angular/core';
import CustomStore from 'devextreme/data/custom_store';
import {GenericService} from '../../../../../shared/generic.service';
import {GenericDataSourceService} from '../../../../../shared/data-source/generic-data-source.service';
import {environment} from '../../../../../../environments/environment';
import {UtilService} from '../../../../../shared/util.service';
import {UserService} from "../../../../../core/user/user.service";

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html'
})
export class UserComponent implements OnInit {

    userDataSource: any = {};
    roleDataSource: any = {};
    departmentDataSource: any = {};
    baseUrl: string;

    constructor(private genericService: GenericService,
                private genericDataSourceService: GenericDataSourceService,
                public sessionService: UserService) {

        this.baseUrl = environment.apiUrl;

        const roleService = genericService.instance('role');
        this.userDataSource = genericDataSourceService.instance('user');
        this.departmentDataSource = genericDataSourceService.instance('department').store();

        this.roleDataSource.store = new CustomStore({
            key: 'id',
            load: () => {
                return roleService.findAll(UtilService.setPage({})).then((response: any) => {
                    response.items.forEach(item => {
                        item.roleAuthorities = []
                    })
                    return {
                        data: response.items,
                        totalCount: response.totalCount
                    };
                });
            },
            byKey: (key) => {
                return roleService.findOne(key).then((response: any) => {
                    return response;
                });
            }
        });
    }

    onEditorPreparing(e) {
        if (e.parentType === 'dataRow' && e.dataField === 'enabled' && e.row.isNewRow) {
            e.setValue(true);
            e.editorOptions.readOnly = true;
        }
        if (e.parentType === 'dataRow' && e.dataField === 'username' && !e.row.isNewRow) {
            e.editorOptions.readOnly = true;
        }
    }

    onRowPrepared(info) {
        if (info.rowType === 'data') {
            if ((info.rowIndex % 2) !== 0) {
                info.rowElement.bgColor = '#f3f3f3';
            }
            if (!info.data.enabled) {
                info.rowElement.bgColor = '#ffe6e6';
            }
        }
    }

    onUserDepartmentRolesInsertedUpdated(value: any, data: any): void {
        if (!data.value) {
            data.value = [value.data];
        }
        data.setValue(data.value);
    }

    onDepartmentValueChanged(value: any, data: any): void {
        data.setValue(value);
    }

    onInitNewRow(e: any): void {
        e.data.userDepartmentRoles = [];
        e.data.enabled = true;
    }

    ngOnInit() {
    }
}
