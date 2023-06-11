import {NgModule} from '@angular/core';
import {LayoutComponent} from 'app/layout/layout.component';
import {SharedModule} from 'app/shared/shared.module';
import {HrLayoutModule} from "./layouts/vertical/hr/hr.module";

const layoutModules = [
    HrLayoutModule
];

@NgModule({
    declarations: [
        LayoutComponent
    ],
    imports: [
        SharedModule,
        ...layoutModules
    ],
    exports: [
        LayoutComponent,
        ...layoutModules
    ]
})
export class LayoutModule {
}
