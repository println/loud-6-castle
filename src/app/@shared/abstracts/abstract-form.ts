import { Directive } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BasicForm } from './basic-form';

@Directive()
export abstract class AbstractForm<T> extends BasicForm<T> {
  formGroup!: FormGroup;

  protected constructor(protected formBuilder: FormBuilder) {
    super();
    this.createFormGroup();
  }

  abstract ngOnInit(): void;

  protected abstract createFormGroup(): void;
}
