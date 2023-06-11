import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Route, RouterModule} from '@angular/router';
import {ProfileComponent} from './profile.component';
import {DxDataGridModule, DxDropDownBoxModule, DxFileUploaderModule, DxFormModule} from 'devextreme-angular';
import {TranslocoCoreModule} from '../../../../core/transloco/transloco.module';
import {SharedModule} from '../../../../shared/shared.module';


const profileRoutes: Route[] = [
    {
        path     : 'profile',
        component: ProfileComponent
    }
];

@NgModule({
  declarations: [
      ProfileComponent
  ],
    imports: [
        CommonModule,
        RouterModule.forChild(profileRoutes),
        DxDataGridModule,
        DxDropDownBoxModule,
        TranslocoCoreModule,
        SharedModule,
        DxFormModule,
        DxFileUploaderModule,
    ]
})
export class ProfileModule { }
