import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ParameterComponent} from './parameter/parameter.component';
import {BreaktypeComponent} from './breaktype/breaktype.component';
import {DeviceComponent} from './device/device.component';
import {ProfileComponent} from './profile/profile.component';
import {WorkerComponent} from './worker/worker.component';
import {ActivityComponent} from './worker/activity/activity.component';
import {PropertyComponent} from './worker/property/property.component';
import {LeaveComponent} from './worker/leave/leave.component';
import {TimeComponent} from './profile/time/time.component';
import {Route, RouterModule} from "@angular/router";
import {
    DxAutocompleteModule,
    DxButtonModule,
    DxCheckBoxModule,
    DxDataGridModule, DxDateBoxModule,
    DxDropDownBoxModule, DxFormModule,
    DxLookupModule,
    DxPopupModule, DxRadioGroupModule, DxScrollViewModule,
    DxTabPanelModule, DxTagBoxModule
} from "devextreme-angular";
import {TranslocoCoreModule} from "../../../../core/transloco/transloco.module";
import {SharedModule} from "../../../../shared/shared.module";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {MatButtonModule} from "@angular/material/button";
import { ProfilesComponent } from './worker/profiles/profiles.component';
import {MatTabsModule} from "@angular/material/tabs";
import { ScheduleSpesificTimeComponent } from './profile/time/schedule-spesific-time/schedule-spesific-time.component';
import { ScheduleSpesificDateComponent } from './profile/time/schedule-spesific-date/schedule-spesific-date.component';
import { ScheduleCustomDateComponent } from './profile/time/schedule-custom-date/schedule-custom-date.component';
import { BreakSpesificTimeComponent } from './profile/time/break-spesific-time/break-spesific-time.component';
import { BreakSpesificDateComponent } from './profile/time/break-spesific-date/break-spesific-date.component';
import { BreakCustomDateComponent } from './profile/time/break-custom-date/break-custom-date.component';
import {DetailProfileGridComponent} from "./worker/profiles/detail-profile-grid/detail-profile-grid.component";
import {DetailBreakGridComponent} from "./worker/profiles/detail-break-grid/detail-break-grid.component";
import { ProfileBreakGridComponent } from './profile/time/profile-break-grid/profile-break-grid.component';
import { ActivityDetailComponent } from './worker/activity-detail/activity-detail.component';
import {MatCardModule} from "@angular/material/card";

const routes: Route[] = [
    {
        path: 'parameter/list',
        component: ParameterComponent
    },
    {
        path: 'break/list',
        component: BreaktypeComponent
    },
    {
        path: 'device/list',
        component: DeviceComponent
    },
    {
        path: 'profile/list',
        component: ProfileComponent
    },
    {
        path: 'worker/list',
        component: WorkerComponent
    },
    {
        path: 'workeractivity/list',
        component: ActivityComponent
    },
    {
        path: 'property/list',
        component: PropertyComponent
    },
    {
        path: 'leave/list',
        component: LeaveComponent
    },
];

@NgModule({
    declarations: [
        ParameterComponent,
        BreaktypeComponent,
        DeviceComponent,
        ProfileComponent,
        WorkerComponent,
        ActivityComponent,
        PropertyComponent,
        LeaveComponent,
        TimeComponent,
        ProfilesComponent,
        DetailProfileGridComponent,
        DetailBreakGridComponent,
        ScheduleSpesificTimeComponent,
        ScheduleSpesificDateComponent,
        ScheduleCustomDateComponent,
        BreakSpesificTimeComponent,
        BreakSpesificDateComponent,
        BreakCustomDateComponent,
        ProfileBreakGridComponent,
        ActivityDetailComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        DxDataGridModule,
        DxDropDownBoxModule,
        TranslocoCoreModule,
        SharedModule,
        MatIconModule,
        MatMenuModule,
        MatButtonModule,
        DxPopupModule,
        DxLookupModule,
        DxTabPanelModule,
        DxFormModule,
        MatTabsModule,
        DxRadioGroupModule,
        DxScrollViewModule,
        DxCheckBoxModule,
        DxButtonModule,
        DxDateBoxModule,
        MatCardModule,
        DxAutocompleteModule,
        DxTagBoxModule,
    ]
})
export class WorkerModule {
}
