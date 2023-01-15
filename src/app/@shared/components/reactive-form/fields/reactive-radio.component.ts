import { Component } from '@angular/core';
import { ControlContainer, NG_VALUE_ACCESSOR } from '@angular/forms';
import { AbstractSelectableReactive } from './abstract-selectable-reactive';
import SelectedItem from '../models/selected-item.model';

@Component({
  selector: 'app-reactive-radio[formControlName][data]',
  template: `
    <div class="form-check" *ngFor="let item of data">
      <input
        class="form-check-input"
        type="radio"
        [name]="name"
        id="{{ id }}_{{ item.value }}"
        [formControl]="control"
        [value]="item.value"
      />
      <label class="form-check-label" for="{{ id }}_{{ item.value }}"> {{ item.label }} </label>
    </div>
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
