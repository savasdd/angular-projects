import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {MainComponent} from "../home/main/main.component";
import {GuardService} from "../login/guard.service";
import {LoginFormComponent} from "../login/login-form/login-form.component";

const routes: Routes = [
  {
    path: 'home',
    component: MainComponent,
    canActivate: [GuardService]
  },
  {
    path: 'login',
    component: LoginFormComponent
  },
  {path: '', redirectTo: 'home', pathMatch: 'full'}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class RoutingModule {
}
