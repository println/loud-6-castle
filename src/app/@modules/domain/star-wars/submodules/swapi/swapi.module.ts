import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleService } from '@modules/domain/star-wars/submodules/swapi/services/people.service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [PeopleService],
})
export class SwapiModule {}
