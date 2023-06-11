import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FuseFullscreenComponent } from '@fuse/components/fullscreen/fullscreen.component';
import { CommonModule } from '@angular/common';
import {TranslocoModule} from "@ngneat/transloco";
import {SharedModule} from "../../../app/shared/shared.module";

@NgModule({
    declarations: [
        FuseFullscreenComponent
    ],
    imports: [
        MatButtonModule,
        MatIconModule,
        MatTooltipModule,
        CommonModule,
        TranslocoModule,
        SharedModule
    ],
    exports     : [
        FuseFullscreenComponent
    ]
})
export class FuseFullscreenModule
{
}
