import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Route, RouterModule} from '@angular/router';
import {RoleComponent} from './role/role.component';
import {UserComponent} from './user/user.component';
import {
    DxButtonModule,
    DxDataGridModule,
    DxDateBoxModule,
    DxFormModule,
    DxPopupModule,
    DxSwitchModule, DxTextBoxModule
} from 'devextreme-angular';
import {TranslocoModule} from '@ngneat/transloco';
import {SharedModule} from '../../../../shared/shared.module';
import {DepartmentModule} from '../department/department.module';

const authRoutes: Route[] = [
    {
        path     : 'auth/role',
        component: RoleComponent
    },
    {
        path     : 'auth/user',
        component: UserComponent
    }
];
@NgModule({
  declarations: [
      RoleComponent,
      UserComponent
  ],
    imports: [
        CommonModule,
        RouterModule.forChild(authRoutes),
        DxDataGridModule,
        TranslocoModule,
        SharedModule,
        DxSwitchModule,
        DepartmentModule,
        DxButtonModule,
        DxPopupModule,
        DxDateBoxModule,
        DxFormModule,
        DxTextBoxModule
    ]
})
export class AuthModule { }
