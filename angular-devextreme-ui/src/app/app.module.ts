import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ExtraOptions, PreloadAllModules, RouterModule} from '@angular/router';
import {FuseModule} from '@fuse';
import {FuseConfigModule} from '@fuse/services/config';
import {FuseMockApiModule} from '@fuse/lib/mock-api';
import {CoreModule} from 'app/core/core.module';
import {appConfig} from 'app/core/config/app.config';
import {LayoutModule} from 'app/layout/layout.module';
import {AppComponent} from 'app/app.component';
import {appRoutes} from 'app/app.routing';

import 'proj4leaflet';
import 'leaflet-fullscreen';
import 'leaflet-mouse-position';
import 'leaflet-realtime';
import 'leaflet-plugins/layer/tile/Yandex';
import 'leaflet-easybutton';
import 'leaflet.markercluster';
import 'leaflet-draw';
import 'leaflet-ajax';
import 'leaflet-iconmaterial';
import 'leaflet-measure-path';
import {ApiModule, Configuration} from "./shared/hr-service-api";
import {environment} from "../environments/environment";
import {TranslocoModule} from "@ngneat/transloco";
import {SharedModule} from "./shared/shared.module";
import {DxChartModule, DxPieChartModule, DxTemplateModule} from "devextreme-angular";
import {
    DxiSeriesModule,
    DxiValueAxisModule,
    DxoArgumentAxisModule,
    DxoCommonSeriesSettingsModule,
    DxoExportModule,
    DxoLabelModule,
    DxoLegendModule,
    DxoTooltipModule
} from "devextreme-angular/ui/nested";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {SlickCarouselModule} from "ngx-slick-carousel";
import {mockApiServices} from "./mock-api";

const routerConfig: ExtraOptions = {
    preloadingStrategy: PreloadAllModules,
    scrollPositionRestoration: 'enabled'
};

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(appRoutes, routerConfig),

        // Fuse, FuseConfig & FuseMockAPI
        FuseModule,
        FuseConfigModule.forRoot(appConfig),
        FuseMockApiModule.forRoot(mockApiServices),

        // Core module of your application
        CoreModule,

        // Layout module of your application
        LayoutModule,
        ApiModule.forRoot(() => {
            return new Configuration({
                basePath: `${environment.apiUrl}`
            });
        }),
        TranslocoModule,
        SharedModule,
        DxChartModule,
        DxPieChartModule,
        DxTemplateModule,
        DxiSeriesModule,
        DxiValueAxisModule,
        DxoArgumentAxisModule,
        DxoCommonSeriesSettingsModule,
        DxoExportModule,
        DxoLabelModule,
        DxoLegendModule,
        DxoTooltipModule,
        MatDatepickerModule,
        SlickCarouselModule,
    ],
    // providers: [
    //     {
    //         provide: HTTP_INTERCEPTORS,
    //         useClass: AuthInterceptor,
    //         multi: true
    //     },
    // ],
    exports: [],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
