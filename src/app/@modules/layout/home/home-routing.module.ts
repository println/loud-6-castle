import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { extract } from '@modules/layout/i18n';
import { HomeComponent } from './home.component';
import { Shell } from '@modules/layout/shell/shell.service';
import { ROUTE_ID } from '@config/route-id.config';
import { ROUTE_PATH } from '@config/route-path.config';

const routes: Routes = [
  Shell.childRoutes([
    { path: '', redirectTo: ROUTE_PATH.home, pathMatch: 'full' },
    { path: ROUTE_ID.home, component: HomeComponent, data: { title: extract('Home') } },
  ]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class HomeRoutingModule {}
