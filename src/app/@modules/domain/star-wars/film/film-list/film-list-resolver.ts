import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';

import { Observable } from 'rxjs';
import { ServerParamsFilter } from '@shared/api/swapi/server-params.filter';
import { GridData } from '@shared/components/grid/grid-data.model';
import { Film } from '@shared/api/swapi/models/film.model';
import { FilmService } from '../film.service';

@Injectable({
  providedIn: 'root',
})
export class FilmListResolver implements Resolve<GridData<Film>> {
  private readonly searchFilters = ['title'];

  constructor(private service: FilmService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<GridData<Film>> {
    const params = ServerParamsFilter.filter(route.queryParams, this.searchFilters);
    return this.service.findAll(params);
  }
}
