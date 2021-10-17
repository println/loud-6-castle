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
  private _data: GridData<any> | undefined;

  @Input() set data(data: GridData<any> | undefined) {
    if (data) {
      this.isLoading = false;
    }
    this._data = data;
  }

  get data(): GridData<any> | undefined {
    return this._data;
  }

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {}

  ngOnDestroy() {}

  onChangePage(event: number) {
    if (event > 0) {
      this.navigate({ page: event });
      this.isLoading = true;
    }
  }

  private navigate(queryParams: {}) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams,
    });
  }
}
