import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import { Observable } from 'rxjs';
import { of } from 'rxjs/internal/observable/of';
import { Person } from '@modules/domain/star-wars/submodules/swapi/models/person.model';

@Injectable({
  providedIn: 'root',
})
export class PersonFactoryResolver implements Resolve<Person> {
  resolve(): Observable<Person> {
    return of({} as Person);
  }
}
