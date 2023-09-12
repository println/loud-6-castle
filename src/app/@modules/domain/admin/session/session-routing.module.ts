import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PATHS } from '@config';
import { SessionDetailComponent } from './session-detail/session-detail.component';
import { SessionListResolver } from './session-list/session-list-resolver';
import { SessionListComponent } from './session-list/session-list.component';
import { SessionResolver } from './session-resolver';

const routes: Routes = [
  {
    path: PATHS.empty,
    children: [
      {
        path: PATHS.empty,
        pathMatch: 'full',
        component: SessionListComponent,
        runGuardsAndResolvers: 'paramsOrQueryParamsChange',
        resolve: {
          page: SessionListResolver,
        },
      },
      {
        path: PATHS.pathId,
        pathMatch: 'full',
        component: SessionDetailComponent,
        resolve: {
          data: SessionResolver,
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SessionRoutingModule {}
