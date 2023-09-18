import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PATHS, ROUTES } from '@config';
import { Session } from '@shared/openapi';
import { of } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-session-detail',
  templateUrl: './session-detail.component.html',
})
export class SessionDetailComponent implements OnInit {
  routes = ROUTES;
  paths = PATHS;

  data$: Observable<{ [name: string]: Session }> = of({});

  constructor(private route: ActivatedRoute, private router: Router, private service: SessionService) {}

  ngOnInit() {
    this.data$ = this.route.data;
  }

  delete(item: Session) {
    if (!confirm(`Are you sure to delete ${item.accountId}?`)) {
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
