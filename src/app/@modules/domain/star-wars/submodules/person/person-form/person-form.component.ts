import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { Person } from '@modules/domain/star-wars/submodules/swapi/models/person.model';

@Component({
  selector: 'app-people-form',
  templateUrl: './person-form.component.html',
})
export class PersonFormComponent implements OnInit {
  data$: Observable<{ [name: string]: Person }> = of({});

  cars = ['car1', 'car2', 'car3', 'car4'];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.data$ = this.route.data;
  }

  submit(data: {}) {
    console.log(data);
    return false;
  }
}
