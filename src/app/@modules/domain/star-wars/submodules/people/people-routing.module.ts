import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeopleDetailComponent } from './people-detail/people-detail.component';
import { PeopleFormComponent } from './people-form/people-form.component';
import { PeopleListComponent } from './people-list/people-list.component';
import { PeopleListResolver } from '@modules/domain/star-wars/submodules/people/people-list/people-list-resolver';
import { PeopleResolver } from '@modules/domain/star-wars/submodules/people/people-resolver';
import { PeopleFactoryResolver } from '@modules/domain/star-wars/submodules/people/people-form/people-factory-resolver.service';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: PeopleListComponent,
        runGuardsAndResolvers: 'paramsOrQueryParamsChange',
        resolve: {
          page: PeopleListResolver,
        },
      },
      {
        path: 'new',
        pathMatch: 'full',
        component: PeopleFormComponent,
        resolve: {
          person: PeopleFactoryResolver,
        },
      },
      {
        path: ':personId/edit',
        pathMatch: 'full',
        component: PeopleFormComponent,
        resolve: {
          person: PeopleResolver,
        },
      },
      {
        path: ':personId',
        pathMatch: 'full',
        component: PeopleDetailComponent,
        resolve: {
          person: PeopleResolver,
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PeopleRoutingModule {}
