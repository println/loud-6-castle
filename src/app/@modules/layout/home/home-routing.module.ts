import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';

import { HomeComponent } from './home.component';
import { Shell } from '@modules/layout/shell/shell.service';
import { ROUTES } from '@config';

const routes: Routes = [
  Shell.childRoutes([
    { path: '', redirectTo: ROUTES.home.path, pathMatch: 'full' },
    { path: ROUTES.home.id, component: HomeComponent, data: { title: marker(ROUTES.home.title) } },
  ]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class HomeRoutingModule {}
