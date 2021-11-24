import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NgFormsManager } from '@ngneat/forms-manager';
import { UntilDestroy } from '@ngneat/until-destroy';
import { AbstractForm } from '@shared/abstracts/abstract-form';
import { AbstractCompositeReactiveStatefulForm } from '@shared/abstracts/abstract-composite-reactive-stateful-form.directive';
import { AbstractPartialReactiveStatefulForm } from '@shared/abstracts/abstract-partial-reactive-stateful-form';
import { Person } from '@shared/api/swapi/models/person.model';
import SelectedItem from '@shared/components/reactive-form/models/selected-item.model';
import { PartialFormQuery } from '@shared/states/form/partial-form.state';
import { ExtraData } from '../extra-data';

@UntilDestroy()
@Component({
  selector: 'app-person-basic-form',
  templateUrl: './person-basic-form.component.html',
  providers: [PartialFormQuery],
})
export class PersonBasicFormComponent extends AbstractPartialReactiveStatefulForm<PersonForms, Person, ExtraData> {
  get selectedGenders(): SelectedItem[] {
    return [
      { value: 'male', label: 'male' } as SelectedItem,
      { value: 'female', label: 'female' } as SelectedItem,
      { value: 'n/a', label: 'n/a' } as SelectedItem,
    ];
  }

  constructor(
    protected formsManager: NgFormsManager<PersonForms>,
    protected query: PartialFormQuery<Person, ExtraData>,
    private formBuilder: FormBuilder
  ) {
    super(formsManager, query, 'basic');
  }

  protected createFormGroup(): void {
    this.formGroup = this.formBuilder.group({
      name: [this.pristineData?.name, [Validators.required, Validators.minLength(3)]],
      birth_year: [this.pristineData?.birth_year, [Validators.required, Validators.minLength(3)]],
      gender: [this.pristineData?.gender, [Validators.required]],
      homeworld: [this.pristineData?.homeworld, [Validators.required]],
    });
  }
}
