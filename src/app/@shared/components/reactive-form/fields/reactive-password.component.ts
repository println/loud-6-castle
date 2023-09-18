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
  selector: 'app-reactive-password[formControlName]',
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
    <div class="input-group input-group-lg">
      <input
        class="form-control"
        [id]="id"
        [name]="name"
        [formControl]="control"
        [type]="showPassword ? 'text' : 'password'"
        [placeholder]="'Password' | translate"
      />
      <span class="input-group-text" (click)="toggleShowPassword()">
        <i [hidden]="showPassword" class="fas fa-eye"></i>
        <i [hidden]="!showPassword" class="fas fa-eye-slash"></i>
      </span>
    </div>
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
      useExisting: ReactivePasswordComponent,
      multi: true,
    },
  ],
})
export class ReactivePasswordComponent extends AbstractReactive {
  showPassword = false;

  constructor(controlContainer: ControlContainer) {
    super(controlContainer);
  }

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }
}
