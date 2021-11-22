import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmListResolver } from '@modules/domain/star-wars/film/film-list/film-list-resolver';
import { PersonDetailComponent } from './person-detail/person-detail.component';
import { PersonBasicFormComponent } from './person-form/person-basic-form/person-basic-form.component';
import { PersonExtraInfoFormComponent } from './person-form/person-extra-info-form/person-extra-info-form.component';
import { PersonFormHandlerComponent } from './person-form/person-form-handler/person-form-handler.component';
import { PersonVisualFormComponent } from './person-form/person-visual-form/person-visual-form.component';
import { PersonListResolver } from './person-list/person-list-resolver';
import { PersonListComponent } from './person-list/person-list.component';
import { PersonResolver } from './person-resolver';

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
        component: PersonFormHandlerComponent,
        resolve: {
          films: FilmListResolver,
        },
        children: [
          { path: '', redirectTo: 'basic' },
          {
            path: 'basic',
            pathMatch: 'full',
            component: PersonBasicFormComponent,
          },
          {
            path: 'visual',
            pathMatch: 'full',
            component: PersonVisualFormComponent,
          },
          {
            path: 'extra-info',
            pathMatch: 'full',
            component: PersonExtraInfoFormComponent,
          },
        ],
      },
      {
        path: ':personId/edit',
        component: PersonFormHandlerComponent,
        resolve: {
          data: PersonResolver,
          films: FilmListResolver,
        },
        children: [
          { path: '', redirectTo: 'basic' },
          {
            path: 'basic',
            pathMatch: 'full',
            component: PersonBasicFormComponent,
          },
          {
            path: 'visual',
            pathMatch: 'full',
            component: PersonVisualFormComponent,
          },
          {
            path: 'extra-info',
            pathMatch: 'full',
            component: PersonExtraInfoFormComponent,
          },
        ],
      },
      {
        path: ':personId',
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
