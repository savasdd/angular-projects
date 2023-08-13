import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule, ExtraOptions, NoPreloading } from '@angular/router';
import { LandmarkComponent } from './landmark/landmark.component';
import { HomeComponent } from './home/home.component';
import { RoutingComponent } from './routing/routing.component';
import { AntPathComponent } from './ant-path/ant-path.component';
import { GeofenceComponent } from './geofence/geofence.component';

export const appRoutes: Route[] = [
  { path: 'landmark', component: LandmarkComponent },
  { path: 'routing', component: RoutingComponent },
  { path: 'ant-path', component: AntPathComponent },
  { path: 'geofence', component: GeofenceComponent },
];


@NgModule({
  declarations: [
    LandmarkComponent,
    HomeComponent,
    RoutingComponent,
    AntPathComponent,
    GeofenceComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes),
  ]
})
export class LeafletModule { }
