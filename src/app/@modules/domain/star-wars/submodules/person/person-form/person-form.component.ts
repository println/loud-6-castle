import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonFormData } from './person-form-data.model';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Person } from '@modules/domain/star-wars/submodules/swapi/models/person.model';

@UntilDestroy()
@Component({
  selector: 'app-people-form',
  templateUrl: './person-form.component.html',
})
export class PersonFormComponent implements OnInit {
  pristineData!: Person;
  formData: PersonFormData = new PersonFormData({} as Person);

  cars = ['car1', 'car2', 'car3', 'car4'];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.data.pipe(untilDestroyed(this)).subscribe((data) => {
      this.pristineData = data.data;
      this.formData = new PersonFormData(this.pristineData);
    });
  }

  submit(data: {}) {
    console.log(data);
    console.log(this.formData);
    return false;
  }
}
