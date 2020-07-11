import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { extract } from '@modules/layout/i18n';
import { HomeComponent } from './home.component';
import { Shell } from '@modules/layout/shell/shell.service';
import { ROUTE } from '@config';

const routes: Routes = [
  Shell.childRoutes([
    { path: '', redirectTo: ROUTE.home.path, pathMatch: 'full' },
    { path: ROUTE.home.id, component: HomeComponent, data: { title: extract(ROUTE.home.title) } },
  ]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class HomeRoutingModule {}
