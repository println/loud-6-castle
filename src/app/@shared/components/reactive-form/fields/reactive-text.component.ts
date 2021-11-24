import { Component, Input, OnInit, ViewChild } from '@angular/core';
import {
  AbstractControl,
  ControlContainer,
  ControlValueAccessor,
  FormControl,
  FormControlDirective,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { AbstractReactive } from './abstract-reactive';

@Component({
  selector: 'app-reactive-text[formControlName]',
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
    <input class="form-control" [id]="id" [name]="name" [formControl]="control" type="text" />
    <ng-container valid><ng-content select="[valid]"></ng-content></ng-container>
    <ng-container invalid><ng-content select="[invalid]"></ng-content></ng-container>
  </div>`,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: ReactiveTextComponent,
      multi: true,
    },
  ],
})
export class ReactiveTextComponent extends AbstractReactive {
  constructor(controlContainer: ControlContainer) {
    super(controlContainer);
  }
}
