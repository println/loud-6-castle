import { Directive, Host, Input, OnDestroy, OnInit, Optional } from '@angular/core';
import { ControlContainer, FormGroup, NgForm, NgModel } from '@angular/forms';
import { FormComponent } from './form.component';

@Directive({
  selector: '[appAsyncModel]',
})
export class FormAsyncModelDirective implements OnInit, OnDestroy {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  @Input() edit = false;
  // private form: FormComponent | NgForm;

  // constructor(
  //   private models: NgModel,
  //   @Optional() @Host() private formComponent: FormComponent,
  //   @Optional() @Host() private ngForm: NgForm
  // ) {
  //   this.form = formComponent ? formComponent : ngForm;
  // }
  //
  // ngOnInit(): void {
  //   if (!this.form) {
  //     return;
  //   }
  //   if (!this.models) {
  //     return;
  //   }
  //   if (this.edit) {
  //     this.models.control.markAsTouched();
  //   }
  //   this.form.addControl(this.models);
  // }
  //
  // ngOnDestroy(): void {
  //   if (!this.form) {
  //     return;
  //   }
  //   if (!this.models) {
  //     return;
  //   }
  //   this.form.removeControl(this.models);
  // }
}
