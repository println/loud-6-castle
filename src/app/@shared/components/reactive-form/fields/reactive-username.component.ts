import { Component } from '@angular/core';
import { ControlContainer, NG_VALUE_ACCESSOR } from '@angular/forms';
import { AbstractReactive } from './abstract-reactive';

@Component({
  selector: 'app-reactive-username[formControlName]',
  template: ` <div>
    <label class="form-label" [for]="id" [class.required]="required">
      <ng-content></ng-content>
    </label>
    <div
      class="input-group has-validation"
      app-reactive-feedback
      [control]="control"
      [name]="name"
      [invalidFeedbackMessage]="invalidFeedbackMessage"
      [validFeedbackMessage]="validFeedbackMessage"
      [feedbackMessage]="feedbackMessage"
    >
      <span class="input-group-text">@</span>
      <input class="form-control" [id]="id" [name]="name" [formControl]="control" type="text" />
      <ng-container valid>
        <ng-content select="[valid]"></ng-content>
      </ng-container>
      <ng-container invalid>
        <ng-content select="[invalid]"></ng-content>
      </ng-container>
    </div>
  </div>`,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: ReactiveUsernameComponent,
      multi: true,
    },
  ],
  host: { class: 'c-input' },
})
export class ReactiveUsernameComponent extends AbstractReactive {
  constructor(controlContainer: ControlContainer) {
    super(controlContainer);
  }
}
