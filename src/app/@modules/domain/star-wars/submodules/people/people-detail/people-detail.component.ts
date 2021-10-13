import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ROUTE } from '@config';
import { of } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { PeopleService } from '@modules/domain/star-wars/submodules/swapi/services/people.service';
import { Person } from '@modules/domain/star-wars/submodules/swapi/models/person.model';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './people-detail.component.html',
})
export class PeopleDetailComponent implements OnInit {
  data$: Observable<{ [name: string]: Person }> = of({});

  constructor(private route: ActivatedRoute, private router: Router, private peopleService: PeopleService) {}

  ngOnInit() {
    this.data$ = this.route.data;
  }

  delete(person: Person) {
    if (!confirm(`Are you sure to delete ${person.name}?`)) {
      return;
    }

    // this.peopleService.deleteById(person).subscribe(
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
}
