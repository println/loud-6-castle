import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '@shared';
import { ComponentsModule } from '@shared/components/components.module';
import { PersonDetailComponent } from './person-detail/person-detail.component';
import { PersonBasicFormComponent } from './person-form/person-basic-form/person-basic-form.component';
import { PersonExtraInfoFormComponent } from './person-form/person-extra-info-form/person-extra-info-form.component';
import { PersonFormHandlerComponent } from './person-form/person-form-handler/person-form-handler.component';
import { PersonVisualFormComponent } from './person-form/person-visual-form/person-visual-form.component';
import { PersonListComponent } from './person-list/person-list.component';
import { PersonRoutingModule } from './person-routing.module';

@NgModule({
  declarations: [
    PersonListComponent,
    PersonDetailComponent,
    PersonBasicFormComponent,
    PersonVisualFormComponent,
    PersonExtraInfoFormComponent,
    PersonFormHandlerComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    PersonRoutingModule,
    NgbPaginationModule,
    ComponentsModule,
    SharedModule,
  ],
})
export class PersonModule {}
