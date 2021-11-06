import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';

import { Observable } from 'rxjs';
import { PeopleService } from '@modules/domain/star-wars/person/people.service';
import { Person } from '@shared/api/swapi/models/person.model';

@Injectable({
  providedIn: 'root',
})
export class PersonResolver implements Resolve<Person> {
  constructor(private service: PeopleService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Person> {
    const personId = route.paramMap.get('personId');
    return this.service.findById(personId);
  }
}
