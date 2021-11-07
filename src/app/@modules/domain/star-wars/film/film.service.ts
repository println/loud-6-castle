import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { Observable } from 'rxjs';
import { GridData } from '@shared/components/grid/grid-data.model';
import { Film } from '@shared/api/swapi/models/film.model';
import { ServerPaginatedResponse } from '@shared/api/swapi/server-paginated.reponse';
import { map, take } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { PagingConverterService } from '@shared/api/swapi/paging-converter.service';

@Injectable({
  providedIn: 'root',
})
export class FilmService {
  protected readonly resource = `/films`;

  constructor(private http: HttpClient, private converter: PagingConverterService) {}

  findAll(queryParams?: Params): Observable<GridData<Film>> {
    return this.http.get<ServerPaginatedResponse<Film>>(this.resource, { params: queryParams }).pipe(
      take(1),
      map((resp: ServerPaginatedResponse<Film>) => this.converter.convert(resp))
    );
  }

  findById(id: any): Observable<Film> {
    return this.http.get<Film>(`${this.resource}/${id}`).pipe(
      take(1),
      map((film: Film) => {
        film.id = this.converter.extractId(film.url);
        return film;
      })
    );
  }
}
