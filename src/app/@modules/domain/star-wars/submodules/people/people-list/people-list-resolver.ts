import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';

import { Observable } from 'rxjs';
import { Page } from '@modules/domain/star-wars/submodules/swapi/page.model';
import { Person } from '@modules/domain/star-wars/submodules/swapi/models/person.model';
import { PeopleService } from '@modules/domain/star-wars/submodules/swapi/services/people.service';
import { ServerParamsFilter } from '@modules/domain/star-wars/submodules/swapi/server-params.filter';

@Injectable({
  providedIn: 'root',
})
export class PeopleListResolver implements Resolve<Page<Person>> {
  constructor(private service: PeopleService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Page<Person>> {
    const params = ServerParamsFilter.filter(route.queryParams, ['name']);
    return this.service.findAll(params);
  }
}
