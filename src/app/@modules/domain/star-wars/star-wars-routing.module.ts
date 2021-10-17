import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RootComponent } from '@modules/domain/star-wars/root/root.component';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: RootComponent, data: { title: marker('Root') } },
  {
    path: 'people',
    loadChildren: () => import('./submodules/person/person.module').then((m) => m.PersonModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StarWarsRoutingModule {}
