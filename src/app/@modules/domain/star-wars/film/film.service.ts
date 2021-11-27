import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { Observable } from 'rxjs';
import { GridData } from '@shared/components/grid/grid-data.model';
import { Film } from '@shared/api/swapi/models/film.model';
import { ServerPaginatedResponse } from '@shared/api/swapi/server-paginated.reponse';
import { map, take, tap } from 'rxjs/operators';
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

  deleteById(entity: Film): Observable<any> {
    return this.http.delete<any>(`${this.resource}/${entity.id}`).pipe(take(1));
  }

  create(entity: Film): Observable<any> {
    return this.http.post<any>(this.resource, entity, { observe: 'response' }).pipe(
      take(1),
      map((res) => res.headers.get('created'))
    );
  }

  update(id: any, entity: Film): Observable<Film> {
    return this.http.put<Film>(`${this.resource}/${id}`, entity).pipe(take(1));
  }
}
