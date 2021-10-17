import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { PeopleService } from '@modules/domain/star-wars/submodules/swapi/services/people.service';
import { Person } from '@modules/domain/star-wars/submodules/swapi/models/person.model';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-people-form',
  templateUrl: './person-form.component.html',
})
export class PersonFormComponent implements OnInit {
  data$: Observable<{ [name: string]: Person }> = of({});

  formData = {
    zipcode: null,
    firstName: null,
    lastName: null,
    username: null,
    city: null,
    state: null,
    agreement: false,
  };

  constructor(private route: ActivatedRoute, private router: Router, private peopleService: PeopleService) {}

  ngOnInit() {
    this.data$ = this.route.data;
  }

  isInvalid(model: NgModel) {
    return !model.valid && model.touched;
  }

  isValid(model: NgModel) {
    return model.valid && model.touched;
  }

  save(person: Person) {
    // this.peopleService.create(person).subscribe(
    //   (val) => {
    //     console.log('CREATE call successful value returned in body', val);
    //     this.router.navigate([ROUTE.employee.id, val.id]);
    //   },
    //   (response) => {
    //     window.alert('CREATE call in error');
    //     console.log('CREATE call in error', response);
    //   }
    // );
  }

  update(person: Person) {
    // this.peopleService.update(person.id, person).subscribe(
    //   (val) => {
    //     console.log('UPDATE call successful value returned in body', val);
    //     this.router.navigate([ROUTE.employee.id, val.id]);
    //   },
    //   (response) => {
    //     window.alert('UPDATE call in error');
    //     console.log('UPDATE call in error', response);
    //   }
    // );
  }

  submit(personForm: NgForm) {
    console.log(personForm);
    return false;
  }
}
