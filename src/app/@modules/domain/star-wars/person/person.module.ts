import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '@shared';
import { ComponentsModule } from '@shared/components/components.module';
import { PersonDetailComponent } from './person-detail/person-detail.component';
import { PersonFormPartialBasicComponent } from './person-form/partial-basic/person-form-partial-basic.component';
import { PersonFormPartialExtraInfoComponent } from './person-form/partial-extra-info/person-form-partial-extra-info.component';
import { PersonFormRootComponent } from './person-form/root/person-form-root.component';
import { PersonFormPartialVisualComponent } from './person-form/partial-visual/person-form-partial-visual.component';
import { PersonListComponent } from './person-list/person-list.component';
import { PersonRoutingModule } from './person-routing.module';

@NgModule({
  declarations: [
    PersonListComponent,
    PersonDetailComponent,
    PersonFormPartialBasicComponent,
    PersonFormPartialVisualComponent,
    PersonFormPartialExtraInfoComponent,
    PersonFormRootComponent,
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
