import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Person } from '@shared/api/swapi/models/person.model';
import { FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AbstractForm } from '@shared/abstracts/abstract-form';
import { Film } from '@shared/api/swapi/models/film.model';
import { GridData } from '@shared/components/grid/grid-data.model';

@UntilDestroy()
@Component({
  selector: 'app-people-form',
  templateUrl: './person-form.component.html',
})
export class PersonFormComponent extends AbstractForm<Person> implements OnInit {
  vehicles = [];
  films: Film[] = [] as Film[];
  starships = [];
  genders = ['male', 'female', 'n/a'];

  constructor(protected formBuilder: FormBuilder, private route: ActivatedRoute) {
    super(formBuilder);
  }

  ngOnInit() {
    this.route.data.pipe(untilDestroyed(this)).subscribe((data) => {
      Object.assign(this.pristineData, data.data);
      this.films = (data.films as GridData<Film>).items;
      this.createFormGroup();
    });
  }

  protected createFormGroup(): void {
    this.formGroup = this.formBuilder.group({
      name: [this.pristineData?.name, [Validators.required, Validators.minLength(3)]],
      birth_year: [this.pristineData?.birth_year, [Validators.required, Validators.minLength(3)]],
      gender: [this.pristineData?.gender, [Validators.required]],
      height: [this.pristineData?.height, [Validators.required, Validators.minLength(2)]],
      mass: [this.pristineData?.mass, [Validators.required, Validators.minLength(1)]],
      eye_color: [this.pristineData?.eye_color, [Validators.required, Validators.minLength(3)]],
      hair_color: [this.pristineData?.hair_color, [Validators.required, Validators.minLength(3)]],
      skin_color: [this.pristineData?.skin_color, [Validators.required, Validators.minLength(3)]],
      species: [this.pristineData?.species, [Validators.required]],
      homeworld: [this.pristineData?.homeworld, [Validators.required]],
      films: [this.pristineData?.films, [Validators.required]],
      starships: this.buildStarships(),
      vehicles: this.buildVehicles(),
      edited: [{ value: this.pristineData?.edited, disabled: true }],
      created: [{ value: this.pristineData?.created, disabled: true }],
    });
  }

  private buildStarships() {
    let arr: any[] = [];
    if (this.isEditing) {
      arr = this.pristineData?.starships.map((v) => this.createControl(v));
    }
    return this.formBuilder.array(arr);
  }

  private buildVehicles() {
    let arr: any[] = [];
    if (this.isEditing) {
      arr = this.pristineData?.vehicles.map((v) => this.createControl(v));
    }
    return this.formBuilder.array(arr);
  }

  private createControl(value: string) {
    return new FormControl(value, [Validators.required]);
  }

  addControl(control: string) {
    const formArray = this.formGroup.get(control) as FormArray;
    formArray.push(this.createControl(''));
  }

  removeAtControl(control: string, at: any) {
    const formArray = this.formGroup.get(control) as FormArray;
    formArray.removeAt(at);
  }

  submit(data: unknown) {
    console.log(data);
    console.log(this.pristineData);
    return false;
  }
}
