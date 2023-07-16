import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PATHS } from '@config';
import { PersonDetailComponent } from './person-detail/person-detail.component';
import { PersonListResolver } from './person-list/person-list-resolver';
import { PersonListComponent } from './person-list/person-list.component';
import { PersonResolver } from './person-resolver';

const routes: Routes = [
  {
    path: PATHS.empty,
    children: [
      {
        path: PATHS.empty,
        pathMatch: 'full',
        component: PersonListComponent,
        runGuardsAndResolvers: 'paramsOrQueryParamsChange',
        resolve: {
          page: PersonListResolver,
        },
      },
      {
        path: PATHS.pathId,
        pathMatch: 'full',
        component: PersonDetailComponent,
        resolve: {
          data: PersonResolver,
        },
      },
      {
        path: PATHS.pathEdit,
        pathMatch: 'full',
        component: PersonDetailComponent,
        resolve: {
          data: PersonResolver,
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
