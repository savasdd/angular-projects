import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LocaleTitleCasePipe} from './pipe/locale-case.pipe';
import {DxNumberBoxModule} from 'devextreme-angular';
import {DxReportViewerModule} from 'devexpress-reporting-angular';
import {TranslocoModule} from "@ngneat/transloco";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        DxNumberBoxModule,
        DxReportViewerModule,
        TranslocoModule
    ],
    declarations: [
        LocaleTitleCasePipe,
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        LocaleTitleCasePipe,
    ]
})
export class SharedModule {
}
