import { Component, OnInit, Renderer2 } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { GridData } from '@shared/components/grid/grid-data.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Film } from '@shared/api/swapi/models/film.model';
import { FilmService } from '@modules/domain/star-wars/film/film.service';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
})
export class FilmListComponent implements OnInit {
  data$!: Observable<{ [name: string]: GridData<Film> }>;

  constructor(
    private route: ActivatedRoute,
    protected router: Router,
    private renderer: Renderer2,
    private service: FilmService
  ) {}

  ngOnInit() {
    this.data$ = this.route.data;
  }

  changePage(page: any, nextPage: number) {
    this.navigate({ page: nextPage });
  }

  delete(employee: Film, event: UIEvent) {
    if (!confirm(`Are you sure to delete ${employee.title}?`)) {
      return;
    }

    const el = event.currentTarget as HTMLElement;
    let parent = el.parentElement as HTMLElement;

    while (!parent.classList.contains('stn-item')) {
      parent = parent.parentElement as HTMLElement;
    }

    // this.service.deleteById(employee).subscribe(
    //   (val) => {
    //     console.log('DELETE call successful value returned in body', val);
    //     this.renderer.setStyle(parent, 'display', 'none');
    //     this.load();
    //   },
    //   (response) => {
    //     window.alert('DELETE call in error');
    //     console.log('DELETE call in error', response);
    //   }
    // );
  }

  private navigate(queryParams: {}) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams,
    });
  }
}
