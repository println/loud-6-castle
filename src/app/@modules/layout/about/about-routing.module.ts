import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@modules/layout/i18n';
import { AboutComponent } from './about.component';

const routes: Routes = [
  // Module is lazy loaded, see domain-routing.module.ts
  { path: '', component: AboutComponent, data: { title: extract('About') } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AboutRoutingModule {}
