import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonRoutingModule } from './person-routing.module';
import { PersonListComponent } from './person-list/person-list.component';
import { PersonDetailComponent } from './person-detail/person-detail.component';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { PersonFormComponent } from './person-form/person-form.component';
import { ComponentsModule } from '@shared/components/components.module';
import { SharedModule } from '@shared';

@NgModule({
  declarations: [PersonListComponent, PersonDetailComponent, PersonFormComponent],
  imports: [CommonModule, FormsModule, PersonRoutingModule, NgbPaginationModule, ComponentsModule, SharedModule],
})
export class PersonModule {}
