import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NgFormsManager } from '@ngneat/forms-manager';
import { UntilDestroy } from '@ngneat/until-destroy';
import { AbstractPartialReactiveStatefulForm } from '@shared/abstracts/abstract-partial-reactive-stateful-form';
import { Person } from '@shared/api/swapi/models/person.model';
import { PartialFormQuery } from '@shared/states/form/partial-form.state';
import { ExtraData } from '../extra-data';

@UntilDestroy()
@Component({
  selector: 'app-person-visual-form',
  templateUrl: './person-visual-form.component.html',
  styles: [],
  providers: [PartialFormQuery],
})
export class PersonVisualFormComponent extends AbstractPartialReactiveStatefulForm<PersonForms, Person, ExtraData> {
  constructor(
    protected formsManager: NgFormsManager<PersonForms>,
    protected query: PartialFormQuery<Person, ExtraData>,
    private formBuilder: FormBuilder
  ) {
    super(formsManager, query, 'visual');
  }

  protected createFormGroup(): void {
    this.formGroup = this.formBuilder.group({
      height: [this.pristineData?.height, [Validators.required, Validators.minLength(2)]],
      mass: [this.pristineData?.mass, [Validators.required, Validators.minLength(1)]],
      eye_color: [this.pristineData?.eye_color, [Validators.required, Validators.minLength(3)]],
      hair_color: [this.pristineData?.hair_color, [Validators.required, Validators.minLength(3)]],
      skin_color: [this.pristineData?.skin_color, [Validators.required, Validators.minLength(3)]],
    });
  }
}
