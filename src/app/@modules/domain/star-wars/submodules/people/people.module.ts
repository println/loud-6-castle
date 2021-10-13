import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleRoutingModule } from './people-routing.module';
import { PeopleListComponent } from './people-list/people-list.component';
import { PeopleDetailComponent } from './people-detail/people-detail.component';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { PeopleFormComponent } from './people-form/people-form.component';
import { SwapiModule } from '@modules/domain/star-wars/submodules/swapi/swapi.module';
import { FormDebugComponent } from './form-debug/form-debug.component';

@NgModule({
  declarations: [PeopleListComponent, PeopleDetailComponent, PeopleFormComponent, FormDebugComponent],
  imports: [CommonModule, FormsModule, PeopleRoutingModule, NgbPaginationModule, SwapiModule],
})
export class PeopleModule {}
