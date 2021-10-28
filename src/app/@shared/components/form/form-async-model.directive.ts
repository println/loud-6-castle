import { Directive, Input, OnDestroy, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { FormComponent } from '@shared/components/form/form.component';

@Directive({
  selector: '[appAsyncModel]',
})
export class FormAsyncModelDirective implements OnInit, OnDestroy {
  @Input('appAsyncModel') formComponent: FormComponent | undefined;

  constructor(private model: NgModel) {}

  ngOnInit(): void {
    if (this.formComponent && this.model) {
      this.formComponent.form.addControl(this.model);
    }
  }

  ngOnDestroy(): void {
    if (this.formComponent && this.model) {
      this.formComponent.form.removeControl(this.model);
    }
  }
}
