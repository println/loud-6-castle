import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';
import { NgFormsManager } from '@ngneat/forms-manager';
import { ControlFactory, HashMap } from '@ngneat/forms-manager/lib/types';
import { UntilDestroy } from '@ngneat/until-destroy';
import { AbstractPartialReactiveStatefulForm } from '@shared/abstracts/abstract-partial-reactive-stateful-form';
import { Person } from '@shared/api/swapi/models/person.model';
import { PartialFormQuery } from '@shared/states/form/partial-form.state';
import { ExtraData } from '../extra-data';

@UntilDestroy()
@Component({
  selector: 'app-person-extra-info-form',
  templateUrl: './person-extra-info-form.component.html',
  styles: [],
  providers: [PartialFormQuery],
})
export class PersonExtraInfoFormComponent extends AbstractPartialReactiveStatefulForm<PersonForms, Person, ExtraData> {
  get vehicles() {
    return this.formGroup.controls.vehicles as FormArray;
  }

  get starships() {
    return this.formGroup.controls.starships as FormArray;
  }

  get arrControlFactory(): ControlFactory | HashMap<ControlFactory> {
    return {
      starships: (value) => this.createControl(value),
      vehicles: (value) => this.createControl(value),
    };
  }

  constructor(
    protected formsManager: NgFormsManager<PersonForms>,
    protected query: PartialFormQuery<Person, ExtraData>,
    private builder: FormBuilder
  ) {
    super(formsManager, query, 'extraInfo');
  }

  addControl(control: string) {
    console.log(this.isEditing);
    const formArray = this.formGroup.get(control) as FormArray;
    formArray.push(this.createControl(''));
  }

  removeAtControl(control: string, at: any) {
    const formArray = this.formGroup.get(control) as FormArray;
    formArray.removeAt(at);
  }

  protected createFormGroup(): void {
    this.formGroup = this.builder.group({
      species: [this.pristineData?.species, [Validators.required]],
      films: [this.pristineData?.films, [Validators.required]],
      starships: this.buildStarships(),
      vehicles: this.buildVehicles(),
    });
  }

  private buildStarships() {
    let arr: any[] = [];
    if (this.isEditing) {
      arr = this.pristineData?.starships.map((v) => this.createControl(v));
    }
    return this.builder.array(arr);
  }

  private buildVehicles() {
    let arr: any[] = [];
    if (this.isEditing) {
      arr = this.pristineData?.vehicles.map((v) => this.createControl(v));
    }
    return this.builder.array(arr);
  }

  private createControl(value: string) {
    return new FormControl(value, [Validators.required]);
  }
}
