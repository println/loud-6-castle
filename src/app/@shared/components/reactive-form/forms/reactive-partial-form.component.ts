import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-partial-form[formGroup]',
  templateUrl: './reactive-partial-form.component.html',
})
export class ReactivePartialFormComponent<T = any> implements OnInit {
  @Input() formGroup!: FormGroup;
  @Input() edit = false;

  constructor() {}

  ngOnInit(): void {
    if (this.edit) {
      this.validateAllFormFields(this.formGroup);
    }
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach((field) => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
    formGroup.markAllAsTouched();
  }
}
