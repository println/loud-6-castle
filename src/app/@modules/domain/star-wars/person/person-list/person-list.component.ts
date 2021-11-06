import { Component, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { Person } from '@shared/api/swapi/models/person.model';
import { PeopleService } from '@modules/domain/star-wars/person/people.service';
import { GridData } from '@shared/components/grid/grid-data.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './person-list.component.html',
})
export class PersonListComponent implements OnInit {
  data$: Observable<{ [name: string]: GridData<Person> }> = of();

  constructor(
    private route: ActivatedRoute,
    protected router: Router,
    private renderer: Renderer2,
    private peopleService: PeopleService
  ) {}

  ngOnInit() {
    this.data$ = this.route.data;
  }

  changePage(page: any, nextPage: number) {
    this.navigate({ page: nextPage });
  }

  delete(employee: Person, event: UIEvent) {
    if (!confirm(`Are you sure to delete ${employee.name}?`)) {
      return;
    }

    const el = event.currentTarget as HTMLElement;
    let parent = el.parentElement as HTMLElement;

    while (!parent.classList.contains('stn-item')) {
      parent = parent.parentElement as HTMLElement;
    }

    // this.peopleService.deleteById(employee).subscribe(
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
