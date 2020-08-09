import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './shared/components';
import { ActiveComponent } from './shared/components';
import { ProjectComponent } from './shared/components';
import { HistoryComponent } from './shared/components';
import { StatsComponent } from './shared/components';
import { HatchingComponent } from './shared/components';
import { SinglehatchComponent } from './shared/components';








import { HomeRoutingModule } from './home/home-routing.module';
import { DetailRoutingModule } from './detail/detail-routing.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'active',
    component: ActiveComponent
  },
  {
    path: 'add',
    component: ProjectComponent
  },
  {
    path: 'history',
    component: HistoryComponent
  },
  {
    path: 'stats',
    component: StatsComponent
  },
  {
    path: 'singlehatch/:id',
    component: SinglehatchComponent
  },
  {
    path: 'hatching',
    component: HatchingComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  },
  
];



@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    HomeRoutingModule,
    DetailRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
