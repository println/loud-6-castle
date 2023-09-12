import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PATHS } from '@config';
import { PersonDetailComponent } from '../../star-wars/person/person-detail/person-detail.component';
import { PersonResolver } from '../../star-wars/person/person-resolver';
import { AccountDetailComponent } from './account-detail/account-detail.component';
import { AccountListResolver } from './account-list/account-list-resolver';
import { AccountListComponent } from './account-list/account-list.component';
import { AccountResolver } from './account-resolver';

const routes: Routes = [
  {
    path: PATHS.empty,
    children: [
      {
        path: PATHS.empty,
        pathMatch: 'full',
        component: AccountListComponent,
        runGuardsAndResolvers: 'paramsOrQueryParamsChange',
        resolve: {
          page: AccountListResolver,
        },
      },
      {
        path: PATHS.pathId,
        pathMatch: 'full',
        component: AccountDetailComponent,
        resolve: {
          data: AccountResolver,
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountRoutingModule {}
