import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { GridData } from '@shared/components/grid/grid-data.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent implements OnInit, OnDestroy {
  isLoading: boolean = false;
  @Input() searchBar = false;

  constructor(private route: ActivatedRoute, private router: Router) {}

  private _data: GridData<any> | undefined;

  get data(): GridData<any> | undefined {
    return this._data;
  }

  @Input() set data(data: GridData<any> | undefined) {
    if (data) {
      this.isLoading = false;
    }
    this._data = data;
  }

  ngOnInit() {}

  ngOnDestroy() {}

  onFilter(query: any) {
    if (query) {
      this.isLoading = true;
      this.navigate(query);
    }
  }

  onChangePage(event: number) {
    if (event > 0) {
      this.isLoading = true;
      this.navigate({ page: event });
    }
  }

  private navigate(query: {}) {
    const queryParams = this.makeQueryParams(query);
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams,
    });
  }

  private makeQueryParams(query: {}) {
    const currentQueryParams = this.route.snapshot.queryParams;
    const newQueryParams = Object.assign({}, currentQueryParams, query);
    const emptyKeys = Object.keys(query).filter((k) => query[k] == null);
    emptyKeys.forEach((k) => delete newQueryParams[k]);
    return newQueryParams;
  }
}
