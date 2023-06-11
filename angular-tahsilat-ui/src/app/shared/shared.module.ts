import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialdesignModule} from "../materialdesign/materialdesign.module";
import {RoutingModule} from "../routing/routing.module";
import {LoginModule} from "../login/login.module";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialdesignModule,
    RoutingModule,
    LoginModule,
    HttpClientModule
  ],
  exports: [MaterialdesignModule, RoutingModule]
})
export class SharedModule {
}
