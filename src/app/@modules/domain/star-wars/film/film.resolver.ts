import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { FilmService } from './film.service';
import { Film } from '@shared/api/swapi/models/film.model';

@Injectable({
  providedIn: 'root',
})
export class FilmResolver implements Resolve<Film> {
  constructor(private service: FilmService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Film> {
    const personId = route.paramMap.get('id');
    return this.service.findById(personId);
  }
}
