import { Component, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { Person } from '@modules/domain/star-wars/submodules/swapi/models/person.model';
import { PeopleService } from '@modules/domain/star-wars/submodules/swapi/services/people.service';
import { Page } from '@modules/domain/star-wars/submodules/swapi/page.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './people-list.component.html',
})
export class PeopleListComponent implements OnInit {
  data$: Observable<{ [name: string]: Page<Person> }> = of();

  constructor(
    private route: ActivatedRoute,
    protected router: Router,
    private renderer: Renderer2,
    private peopleService: PeopleService
  ) {}

  ngOnInit() {
    this.data$ = this.route.data;
  }

  changePage(page: Page<Person>, nextPage: number) {
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
