import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';

import { Observable } from 'rxjs';
import { PeopleService } from '@modules/domain/star-wars/submodules/swapi/services/people.service';
import { Person } from '@modules/domain/star-wars/submodules/swapi/models/person.model';

@Injectable({
  providedIn: 'root',
})
export class PeopleResolver implements Resolve<Person> {
  constructor(private service: PeopleService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Person> {
    const personId = route.paramMap.get('personId');
    return this.service.findById(personId);
  }
}
