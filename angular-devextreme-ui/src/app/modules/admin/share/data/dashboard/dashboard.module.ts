import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Route, RouterModule} from '@angular/router';
import {DxChartModule, DxDataGridModule, DxFormModule, DxPieChartModule} from 'devextreme-angular';
import {TranslocoModule} from '@ngneat/transloco';
import {SharedModule} from '../../../../../shared/shared.module';
import {DashboardWorkerComponent} from './dashboard-worker/dashboard-worker.component';

const dashboardRoutes: Route[] = [
    {
        path: 'dashboard/worker',
        component: DashboardWorkerComponent
    },
];

@NgModule({
    declarations: [
        DashboardWorkerComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(dashboardRoutes),
        DxDataGridModule,
        TranslocoModule,
        SharedModule,
        DxPieChartModule,
        DxFormModule,
        DxChartModule
    ]
})
export class DashboardModule {
}
