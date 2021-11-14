import { Component, Input } from '@angular/core';
import { ControlContainer, NG_VALUE_ACCESSOR } from '@angular/forms';
import { AbstractReactive } from './abstract-reactive';

@Component({
  selector: 'app-reactive-combo[formControlName]',
  template: ` <div
    app-reactive-feedback
    [control]="control"
    [name]="name"
    [invalidFeedbackMessage]="invalidFeedbackMessage"
    [validFeedbackMessage]="validFeedbackMessage"
    [feedbackMessage]="feedbackMessage"
  >
    <label class="form-label" [for]="id" [class.required]="required">
      <ng-content></ng-content>
    </label>
    <select class="form-select" [id]="id" [name]="name" [formControl]="control">
      <ng-content select="[options]"></ng-content>
    </select>
    <ng-container valid>
      <ng-content select="[valid]"></ng-content>
    </ng-container>
    <ng-container invalid>
      <ng-content select="[invalid]"></ng-content>
    </ng-container>
  </div>`,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: ReactiveComboComponent,
      multi: true,
    },
  ],
})
export class ReactiveComboComponent extends AbstractReactive {
  constructor(controlContainer: ControlContainer) {
    super(controlContainer);
  }
}
