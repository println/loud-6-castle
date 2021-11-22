import { AbstractReactive } from './abstract-reactive';
import { ControlContainer } from '@angular/forms';
import { Directive, Input } from '@angular/core';
import SelectedItem from '../models/selected-item.model';

@Directive()
export abstract class AbstractSelectableReactive extends AbstractReactive {
  @Input() data!: SelectedItem[];

  protected constructor(controlContainer: ControlContainer) {
    super(controlContainer);
  }
}
