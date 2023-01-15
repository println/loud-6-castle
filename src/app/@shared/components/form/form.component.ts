import { Component, ContentChild, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
})
export class FormComponent implements OnInit {
  @Input() formGroup!: FormGroup;
  @Input() edit = false;
  @Output() formSubmit: EventEmitter<{}> = new EventEmitter();
  @ContentChild('buttonTemplate', { static: false }) buttonTemplateRef!: TemplateRef<any>;

  constructor() {}

  ngOnInit(): void {
    Object.getPrototypeOf(this.formGroup).submitted = false;
    if (this.edit) {
      this.validateAllFormFields(this.formGroup);
    }
  }

  onSubmit(e: Event) {
    if (this.formGroup.valid) {
      this.formGroup['submitted'] = true;
      this.formSubmit.emit(this.formGroup.value);
    } else {
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
