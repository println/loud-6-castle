import { AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit, AfterViewInit {
  @Output() search: EventEmitter<{}> = new EventEmitter();
  @ViewChild('searchForm') form: ElementRef<HTMLFormElement> | undefined;
  private refreshData: {} | undefined;
  private lastQuery = {};

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.refreshFormParams(params);
    });
  }

  ngAfterViewInit(): void {
    if (this.refreshData) {
      this.refreshFormParams(this.refreshData);
      this.refreshData = undefined;
    }
  }

  onFilter(form: any) {
    const query = this.getFormElements(form.target).reduce((map, el) => {
      map[el.name] = el.value ? el.value : null;
      return map;
    }, {});

    const newQueryJson = JSON.stringify(query, (key, value) => {
      if (value !== null) return value;
    });

    const lastQueryJson = JSON.stringify(this.lastQuery);

    if (newQueryJson != lastQueryJson) {
      this.search.emit(query);
    }
  }

  private refreshFormParams(params: {}) {
    if (!this.form) {
      this.refreshData = params;
      return;
    }

    this.lastQuery = {};
    const filterElements = this.getFormElements(this.form.nativeElement);
    filterElements.forEach((el) => {
      const key = el.name;
      const value = params[key];
      if (value) {
        el.value = value;
        this.lastQuery[key] = value;
      }
    });
  }

  private getFormElements(formEl: HTMLElement): any[] {
    return Array.from(formEl.querySelectorAll('select, input, textarea'));
  }
}
