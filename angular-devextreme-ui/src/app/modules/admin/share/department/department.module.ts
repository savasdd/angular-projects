import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DxDataGridModule, DxDropDownBoxModule, DxTreeListModule,} from 'devextreme-angular';
import {Route, RouterModule} from '@angular/router';
import {TranslocoCoreModule} from '../../../../core/transloco/transloco.module';
import {SharedModule} from '../../../../shared/shared.module';
import {DepartmentTypeComponent} from './department-type/department-type.component';
import {DepartmentTreeListComponent} from './department-tree-list/department-tree-list.component';

const departmentRoutes: Route[] = [
    {
        path: 'department/type',
        component: DepartmentTypeComponent
    }
];

@NgModule({
    declarations: [
        DepartmentTypeComponent,
        DepartmentTreeListComponent,
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(departmentRoutes),
        DxDataGridModule,
        DxTreeListModule,
        DxDropDownBoxModule,
        TranslocoCoreModule,
        SharedModule,
    ],
    exports: [DepartmentTreeListComponent]
})
export class DepartmentModule {
}
