import {Component, ViewChild} from '@angular/core';
import {DxDataGridComponent} from 'devextreme-angular';
import {GenericService} from '../../../../../shared/generic.service';
import {GenericDataSourceService} from '../../../../../shared/data-source/generic-data-source.service';
import {UserService} from '../../../../../core/user/user.service';

@Component({
    selector: 'app-location',
    templateUrl: './role.component.html'
})
export class RoleComponent {

    roleDataSource: any = {};
    authorityDataSource: any = {};
    rolesDataSource: any = {};
    authoritiesData: any = [];
    isSelectDataSource: any;
    item: any;
    authorityItem: any;
    popupVisible = false;
    rolNameValue: any;

    @ViewChild('authorityDataGrid', {static: false}) authorityDataGrid: DxDataGridComponent;
    @ViewChild('roleDataGrid', {static: false}) roleDataGrid: DxDataGridComponent;

    constructor(private genericService: GenericService,
                private genericDataSourceService: GenericDataSourceService,
                public sessionService: UserService) {

        this.roleDataSource = genericDataSourceService.instance('role');
        this.rolesDataSource = genericDataSourceService.instance('role').store();
        const authorityService = genericService.instance('authority');

        authorityService.findAll({})
            .then((response: any) => {
                response.items.forEach(item => {
                    this.authoritiesData.push({
                        id: item.id,
                        active: true,
                        isDeleted: 0,
                        selected: false,
                        authority: item
                    });
                });
            });

        this.isSelectDataSource = [
            {text: 'Açık', value: true},
            {text: 'Kapalı', value: false}
        ];
    }

    getAuthoritiesDataSource(updateItem) {
        this.authorityItem = updateItem;
        if (!updateItem.value) {
            return this.authoritiesData;
        }
        return updateItem.value;
    }

    onInitNewRow(e: any): void {
        this.authoritiesData.forEach(item => {
            item.selected = false;
        });
        e.data.roles = [];
    }

    onRolesInsertedUpdated(value: any, data: any): void {
        if (!data.value) {
            data.value = [value.data];
        }
        data.setValue(data.value);
    }

    onEditorPreparing(e) {
        if (e.parentType === 'dataRow' && e.dataField === 'active' && e.row.isNewRow) {
            e.setValue(true);
            e.editorOptions.readOnly = true;
        }
    }

    onRowPrepared(info) {
        if (info.rowType === 'data') {
            if ((info.rowIndex % 2) !== 0) {
                info.rowElement.bgColor = '#f3f3f3';
            }
        }
    }

    onAuthorityChanged(value: any, data: any): void {
        const items: any = this.authorityDataGrid.dataSource;
        items.forEach(item => {
            if (item.id === data.key.id) {
                item.selected = value.value;
            }
        });
        this.authorityItem.setValue(items);
    }


    onRolNameChanged($event: any) {
        this.rolNameValue = $event.value;
    }

    callRoleOperationListPopup(data: any) {
        this.rolNameValue = null;
        console.log(data.data);
        this.popupVisible = true;
    }

    insert() {
        const list = this.roleDataGrid.instance.getDataSource().items();
        console.log(list)
        console.log(this.rolNameValue)
    }
}
