import { Component } from '@angular/core';
import { ControlContainer, NG_VALUE_ACCESSOR } from '@angular/forms';
import { AbstractSelectableReactive } from './abstract-selectable-reactive';
import SelectedItem from '../models/selected-item.model';

@Component({
  selector: 'app-reactive-radio[formControlName][data]',
  template: `
    <ng-container *ngIf="isStarted">
      <div class="form-check">
        <input class="form-check-input" name="t" type="radio" [formControl]="control" value="male" />
        <label class="form-check-label"> male </label>
      </div>

      <div class="form-check">
        <input class="form-check-input" name="t" type="radio" [formControl]="control" value="female" />
        <label class="form-check-label"> female </label>
      </div>
    </ng-container>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: ReactiveRadioComponent,
      multi: true,
    },
  ],
})
export class ReactiveRadioComponent extends AbstractSelectableReactive {
  datas: any[] = [];

  constructor(controlContainer: ControlContainer) {
    super(controlContainer);
  }

  get dataz() {
    return [
      { value: 'male', label: 'male' } as SelectedItem,
      { value: 'female', label: 'female' } as SelectedItem,
      { value: 'n/a', label: 'n/a' } as SelectedItem,
    ];
  }

  ngOnInit() {
    super.ngOnInit();
    console.log(this.data);
  }

  ngAfterContentInit() {
    console.log(this.data);
    this.isStarted = true;
  }

  getId(item: SelectedItem): any {
    return `${this.id}-${item.value}`;
  }
}
