import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Page } from '@modules/domain/star-wars/submodules/swapi/page.model';
import { Person, PersonSearch } from '@modules/domain/star-wars/submodules/swapi/models/person.model';
import { map, take } from 'rxjs/operators';
import { API, ENDPOINTS } from '@modules/domain/star-wars/submodules/swapi/endpoints.config';
import { PaginatedResponse } from '@modules/domain/star-wars/submodules/swapi/services/paginated-response';
import { Params } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class PeopleService {
  protected readonly resource = `${API}${ENDPOINTS.PEOPLE}`;

  constructor(protected http: HttpClient) {}

  findAll(queryParams?: Params): Observable<Page<Person>> {
    return this.http.get<PaginatedResponse<Person>>(this.resource, { params: queryParams }).pipe(
      take(1),
      map((resp: PaginatedResponse<Person>) => {
        resp.results = this.setId(resp.results);
        resp.next = this.extractPageIndex(resp.next);
        resp.previous = this.extractPageIndex(resp.previous);
        return resp;
      }),
      map((resp: PaginatedResponse<Person>) => new Page<Person>(resp))
    );
  }

  findById(id: any): Observable<Person> {
    return this.http.get<Person>(`${this.resource}/${id}`).pipe(
      take(1),
      map((person: Person) => {
        person.id = this.extractId(person.url);
        return person;
      })
    );
  }

  private setId(people: Person[]): Person[] {
    return people.map((person) => {
      person.id = this.extractId(person.url);
      return person;
    });
  }

  private extractId(url: string) {
    let data: any = url.match(/(\d+)/g) || [];
    return parseInt(data);
  }

  private extractPageIndex(url: string | null) {
    if (url) {
      let data: any = url.match(/(\d+)/g) || [];
      return data;
    }
    return url;
  }
}
