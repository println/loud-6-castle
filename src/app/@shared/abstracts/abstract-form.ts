import { Directive } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import clone from '@shared/mixins/clone';

@Directive()
export abstract class AbstractForm<T> {
  pristineData: T = {} as T;
  formGroup!: FormGroup;

  protected constructor(protected formBuilder: FormBuilder) {
    this.createFormGroup();
  }

  get isEditing() {
    if (!this.pristineData) {
      return false;
    }

    if (this.pristineData['id']) {
      return true;
    }

    return Object.keys(this.pristineData).length > 0;
  }

  abstract ngOnInit(): void;

  protected abstract createFormGroup(): void;

  protected clone<F>(data: F): F {
    return clone(data);
  }
}
