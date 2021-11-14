import { Component, Input } from '@angular/core';
import { ControlContainer, NG_VALUE_ACCESSOR } from '@angular/forms';
import { AbstractReactive } from './abstract-reactive';

@Component({
  selector: 'app-reactive-combo-multi[formControlName][source]',
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
    <select class="form-select" [formControl]="control" [name]="name" [id]="id" multiple>
      <option *ngFor="let item of source" [innerHtml]="item[label]" [value]="item[value]"></option>
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
      useExisting: ReactiveComboMultiComponent,
      multi: true,
    },
  ],
})
export class ReactiveComboMultiComponent extends AbstractReactive {
  @Input() source!: any[];
  @Input() label!: string;
  @Input() value!: string;

  constructor(controlContainer: ControlContainer) {
    super(controlContainer);
  }
}
