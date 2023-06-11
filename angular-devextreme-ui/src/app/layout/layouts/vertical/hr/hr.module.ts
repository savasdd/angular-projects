import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {FuseFullscreenModule} from '@fuse/components/fullscreen';
import {FuseLoadingBarModule} from '@fuse/components/loading-bar';
import {FuseNavigationModule} from '@fuse/components/navigation';
import {NotificationsModule} from 'app/layout/common/notifications/notifications.module';
import {SearchModule} from 'app/layout/common/search/search.module';
import {ShortcutsModule} from 'app/layout/common/shortcuts/shortcuts.module';
import {SharedModule} from 'app/shared/shared.module';
import {HrLayoutComponent} from 'app/layout/layouts/vertical/hr/hr.component';
import {TranslocoModule} from "@ngneat/transloco";

@NgModule({
    declarations: [
        HrLayoutComponent
    ],
    imports: [
        HttpClientModule,
        RouterModule,
        MatButtonModule,
        MatDividerModule,
        MatIconModule,
        MatMenuModule,
        FuseFullscreenModule,
        FuseLoadingBarModule,
        FuseNavigationModule,
        NotificationsModule,
        SearchModule,
        ShortcutsModule,
        SharedModule,
        TranslocoModule
    ],
    exports: [
        HrLayoutComponent
    ]
})
export class HrLayoutModule {
}
