import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonDetailComponent } from './person-detail/person-detail.component';
import { PersonFormComponent } from './person-form/person-form.component';
import { PersonListComponent } from './person-list/person-list.component';
import { PersonListResolver } from '@modules/domain/star-wars/submodules/person/person-list/person-list-resolver';
import { PersonResolver } from '@modules/domain/star-wars/submodules/person/person-resolver';
import { PersonFactoryResolver } from '@modules/domain/star-wars/submodules/person/person-form/person-factory-resolver';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: PersonListComponent,
        runGuardsAndResolvers: 'paramsOrQueryParamsChange',
        resolve: {
          page: PersonListResolver,
        },
      },
      {
        path: 'new',
        pathMatch: 'full',
        component: PersonFormComponent,
        resolve: {
          person: PersonFactoryResolver,
        },
      },
      {
        path: ':personId/edit',
        pathMatch: 'full',
        component: PersonFormComponent,
        resolve: {
          person: PersonResolver,
        },
      },
      {
        path: ':personId',
        pathMatch: 'full',
        component: PersonDetailComponent,
        resolve: {
          person: PersonResolver,
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonRoutingModule {}
