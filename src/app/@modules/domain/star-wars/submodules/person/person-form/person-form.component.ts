import { AfterViewInit, Component, NgZone, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonFormData } from './person-form-data.model';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Person } from '@shared/api/swapi/models/person.model';
import { FormComponent } from '@shared';

@UntilDestroy()
@Component({
  selector: 'app-people-form',
  templateUrl: './person-form.component.html',
})
export class PersonFormComponent implements OnInit, AfterViewInit {
  pristineData!: Person;
  formData: PersonFormData = new PersonFormData({} as Person);

  cars = ['car1', 'car2', 'car3', 'car4'];

  @ViewChild(FormComponent) formComponent!: FormComponent;

  constructor(private route: ActivatedRoute, private ngZone: NgZone) {}

  ngOnInit() {
    this.route.data.pipe(untilDestroyed(this)).subscribe((data) => {
      this.pristineData = data.data;
      this.formData = new PersonFormData(this.pristineData);
    });
  }

  ngAfterViewInit(): void {
    if (this.pristineData) {
      this.ngZone.runOutsideAngular(() => {
        setTimeout(() => {
          this.formComponent.form.control.markAllAsTouched();
          this.formComponent.form.form.markAllAsTouched();
          Object.keys(this.formComponent.form.controls).forEach((key) => {
            return this.formComponent.form.controls[key].updateValueAndValidity();
          });
        }, 1000);
      });
    }
  }

  submit(data: {}) {
    console.log(data);
    console.log(this.formData);
    return false;
  }
}
