import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PATHS, ROUTES } from '@config';
import { Film } from '@shared/api/swapi/models/film.model';
import { GridData } from '@shared/components/grid/grid-data.model';
import { AccountDto } from '@shared/api/backend';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-account-list',
  templateUrl: './session-list.component.html',
})
export class SessionListComponent {
  routes = ROUTES;
  paths = PATHS;

  data$!: Observable<{ [name: string]: GridData<AccountDto> }>;

  constructor(private route: ActivatedRoute, protected router: Router) {}

  ngOnInit() {
    this.data$ = this.route.data;
  }

  changePage(page: any, nextPage: number) {
    this.navigate({ page: nextPage });
  }

  delete(entity: Film, event: UIEvent) {}

  private navigate(queryParams: {}) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams,
    });
  }
}
