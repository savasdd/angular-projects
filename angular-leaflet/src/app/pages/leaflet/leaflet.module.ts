import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule, ExtraOptions, NoPreloading } from '@angular/router';
import { LandmarkComponent } from './landmark/landmark.component';
import { HomeComponent } from './home/home.component';

export const appRoutes: Route[] = [
  { path: 'landmark', component: LandmarkComponent },
];


@NgModule({
  declarations: [
    LandmarkComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes),
  ]
})
export class LeafletModule { }
