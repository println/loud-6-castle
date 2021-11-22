import { AfterViewInit, Directive, Input, OnInit, ViewChild } from '@angular/core';
import {
  AbstractControl,
  ControlContainer,
  ControlValueAccessor,
  FormControl,
  FormControlDirective,
} from '@angular/forms';

@Directive()
export abstract class AbstractReactive implements OnInit, AfterViewInit, ControlValueAccessor {
  isStarted = false;

  @ViewChild(FormControlDirective, { static: true })
  formControlDirective: FormControlDirective | undefined;

  @Input() feedbackMessage = true;
  @Input() validFeedbackMessage = true;
  @Input() invalidFeedbackMessage = true;

  @Input() formControl!: FormControl;
  @Input() formControlName!: string;
  @Input() id!: string;
  @Input() name!: string;

  protected constructor(private controlContainer: ControlContainer) {}

  get control() {
    return this.formControl || this.controlContainer?.control?.get(this.formControlName);
  }

  get required(): boolean {
    if (!this.control || !this.control.validator) {
      return false;
    }
    const validator = this.control.validator({} as AbstractControl);
    return validator && validator.required;
  }

  registerOnTouched(fn: any): void {
    this.formControlDirective?.valueAccessor?.registerOnTouched(fn);
  }

  registerOnChange(fn: any): void {
    this.formControlDirective?.valueAccessor?.registerOnChange(fn);
  }

  writeValue(obj: any): void {
    this.formControlDirective?.valueAccessor?.writeValue(obj);
  }

  setDisabledState(isDisabled: boolean): void {
    // @ts-ignore
    this.formControlDirective?.valueAccessor?.setDisabledState(isDisabled);
  }

  ngOnInit(): void {
    this.id = this.id ? this.id : this.formControlName;
    this.name = this.name ? this.name : this.formControlName;
  }

  ngAfterViewInit(): void {}

  ngAfterContentChecked() {
    //this.isStarted = true;
  }
}
