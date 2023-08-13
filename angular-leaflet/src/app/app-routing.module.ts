import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions, NoPreloading } from '@angular/router';
import { HomeComponent } from '../app/pages/leaflet/home/home.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  {
    path: '',
    children: [
      { path: 'leaflet', loadChildren: () => import('../app/pages/leaflet/leaflet.module').then(m => m.LeafletModule) },
    ],

  }
];

const routerConfig: ExtraOptions = {
  preloadingStrategy: NoPreloading,
  scrollPositionRestoration: 'enabled'
};


@NgModule({
  imports: [RouterModule.forRoot(routes, routerConfig)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
