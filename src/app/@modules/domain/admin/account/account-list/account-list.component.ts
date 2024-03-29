import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PATHS, ROUTES } from '@config';
import { AccountDto } from '@shared/api/backend';
import { GridData } from '@shared/components/grid/grid-data.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
})
export class AccountListComponent {
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

  delete(entity: any, event: UIEvent) {}

  private navigate(queryParams: {}) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams,
    });
  }
}
