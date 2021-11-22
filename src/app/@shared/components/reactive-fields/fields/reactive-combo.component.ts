import { Component } from '@angular/core';
import { ControlContainer, NG_VALUE_ACCESSOR } from '@angular/forms';
import { AbstractSelectableReactive } from './abstract-selectable-reactive';

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
      <option
        *ngFor="let item of data"
        [value]="item.value"
        [innerHTML]="item.label"
        [attr.selected]="item.selected"
        [attr.disabled]="item.disabled"
      ></option>
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
export class ReactiveComboComponent extends AbstractSelectableReactive {
  constructor(controlContainer: ControlContainer) {
    super(controlContainer);
  }
}
