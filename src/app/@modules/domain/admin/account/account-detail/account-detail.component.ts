import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PATHS, ROUTES } from '@config';
import { AccountDto } from '@shared/openapi';
import { of } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { PeopleService } from '@modules/domain/star-wars/person/people.service';
import { Person } from '@shared/api/swapi/models/person.model';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './account-detail.component.html',
})
export class AccountDetailComponent implements OnInit {
  routes = ROUTES;
  paths = PATHS;

  data$: Observable<{ [name: string]: AccountDto }> = of({});

  constructor(private route: ActivatedRoute, private router: Router, private service: AccountService) {}

  ngOnInit() {
    this.data$ = this.route.data;
  }

  delete(account: AccountDto) {
    if (!confirm(`Are you sure to delete ${account.name}?`)) {
      return;
    }

    // this.service.deleteById(person).subscribe(
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
