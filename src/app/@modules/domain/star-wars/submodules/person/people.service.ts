import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Person, PersonSearch } from '@shared/api/swapi/models/person.model';
import { map, take } from 'rxjs/operators';
import { API, ENDPOINTS } from '@shared/api/swapi/endpoints.config';
import { Params } from '@angular/router';
import { PagingConverterService } from '@shared/api/swapi/paging-converter.service';
import { GridData } from '@shared/components/grid/grid-data.model';
import { ServerPaginatedResponse } from '@shared/api/swapi/server-paginated.reponse';

@Injectable({
  providedIn: 'root',
})
export class PeopleService {
  protected readonly resource = `${API}${ENDPOINTS.PEOPLE}`;

  constructor(protected http: HttpClient, private converter: PagingConverterService) {}

  findAll(queryParams?: Params): Observable<GridData<Person>> {
    return this.http.get<ServerPaginatedResponse<Person>>(this.resource, { params: queryParams }).pipe(
      take(1),
      map((resp: ServerPaginatedResponse<Person>) => this.converter.convert(resp))
    );
  }

  findById(id: any): Observable<Person> {
    return this.http.get<Person>(`${this.resource}/${id}`).pipe(
      take(1),
      map((person: Person) => {
        person.id = this.converter.extractId(person.url);
        return person;
      })
    );
  }

  private extractId(url: string) {
    let data: any = url.match(/(\d+)/g) || [];
    return parseInt(data);
  }
}
