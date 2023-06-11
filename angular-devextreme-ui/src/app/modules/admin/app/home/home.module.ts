import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { HomeComponent } from 'app/modules/admin/app/home/home.component';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../../../shared/shared.module';
import {TranslocoModule} from '@ngneat/transloco';
import {GridsterComponent, GridsterItemComponent} from 'angular-gridster2';
import { SlickCarouselModule } from "ngx-slick-carousel";
import {DxChartModule, DxPieChartModule} from "devextreme-angular";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core"
import {WorkerCardComponent} from "../../../../components/worker-card/worker-card.component";
import {WorkerListComponent} from "../../../../components/worker-list/worker-list.component";
import {ShiftChartsComponent} from "../../../../components/shift-charts/shift-charts.component";
import {BreakCarouselCardComponent} from "../../../../components/break-carousel-card/break-carousel-card.component";
import {ShiftScheduleComponent} from "../../../../components/shift-schedule/shift-schedule.component";
import {MatInputModule} from "@angular/material/input";


const homeRoutes: Route[] = [
    {
        path     : '',
        component: HomeComponent
    }
];

@NgModule({
    declarations: [
        HomeComponent,
        WorkerCardComponent,
        WorkerListComponent,
        ShiftChartsComponent,
        BreakCarouselCardComponent,
        ShiftScheduleComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(homeRoutes),
        SharedModule,
        TranslocoModule,
        GridsterComponent,
        GridsterItemComponent,
        SlickCarouselModule,
        DxPieChartModule,
        MatDatepickerModule,
        MatNativeDateModule,
        DxChartModule,
        MatInputModule
    ]
})
export class HomeModule {}
