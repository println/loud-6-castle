import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { PeopleService } from '@modules/domain/star-wars/person/people.service';
import { Person } from '@shared/api/swapi/models/person.model';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './person-detail.component.html',
})
export class PersonDetailComponent implements OnInit {
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
