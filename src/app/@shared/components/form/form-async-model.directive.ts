import { Directive, Host, Input, OnDestroy, OnInit, Optional } from '@angular/core';
import { ControlContainer, NgForm, NgModel } from '@angular/forms';
import { FormComponent } from './form.component';

@Directive({
  selector: '[appAsyncModel]',
})
export class FormAsyncModelDirective implements OnInit, OnDestroy {
  @Input() edit = false;
  private form: FormComponent | NgForm;

  constructor(
    private model: NgModel,
    @Optional() @Host() private formComponent: FormComponent,
    @Optional() @Host() private ngForm: NgForm
  ) {
    this.form = formComponent ? formComponent : ngForm;
  }

  ngOnInit(): void {
    if (!this.form) {
      return;
    }
    if (!this.model) {
      return;
    }
    if (this.edit) {
      this.model.control.markAsTouched();
    }
    this.form.addControl(this.model);
  }

  ngOnDestroy(): void {
    if (!this.form) {
      return;
    }
    if (!this.model) {
      return;
    }
    this.form.removeControl(this.model);
  }
}
