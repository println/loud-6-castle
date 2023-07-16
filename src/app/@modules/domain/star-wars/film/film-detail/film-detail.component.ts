import { Component, OnInit } from '@angular/core';
import { PATHS } from '@config';
import { Observable } from 'rxjs/internal/Observable';
import { ActivatedRoute, Router } from '@angular/router';
import { FilmService } from '../film.service';
import { Film } from '@shared/api/swapi/models/film.model';

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
})
export class FilmDetailComponent implements OnInit {
  paths = PATHS;

  data$!: Observable<{ [name: string]: Film }>;

  constructor(private route: ActivatedRoute, private router: Router, private service: FilmService) {}

  ngOnInit() {
    this.data$ = this.route.data;
  }

  delete(film: Film) {
    if (!confirm(`Are you sure to delete ${film.title}?`)) {
      return;
    }

    // this.service.deleteById(person).subscribe(
    //   (val) => {
    //     console.log('DELETE call successful value returned in body', val);
    //     this.router.navigate([ROUTE.employee.id]);
    //   },
    //   (response) => {
    //     window.alert('DELETE call in error');
    //     console.log('DELETE call in error', response);
    //   }
    // );
  }

  isArray(value: any): boolean {
    return Array.isArray(value);
  }
}
