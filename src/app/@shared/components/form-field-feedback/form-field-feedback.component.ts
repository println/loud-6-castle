import { AfterViewInit, Component, ContentChild, ElementRef, Input, OnInit } from '@angular/core';
import { FormControlName, NgControl } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-form-field-feedback, [app-form-field-feedback]',
  templateUrl: './form-field-feedback.component.html',
})
export class FormFieldFeedbackComponent implements OnInit, AfterViewInit {
  @Input() feedbackMessage = true;
  @Input() validFeedbackMessage = true;
  @Input() invalidFeedbackMessage = true;
  @Input() validClass = 'is-valid';
  @Input() invalidClass = 'is-invalid';

  @ContentChild(FormControlName)
  private formControl!: FormControlName;

  private htmlElement: any;

  constructor(private elementRef: ElementRef) {}

  get isValid(): boolean {
    this.setModelValidationClass();
    return this.checkIsValid();
  }

  get isInvalid(): boolean {
    this.setModelValidationClass();
    return this.checkIsInvalid();
  }

  ngOnInit(): void {}

  ngAfterViewInit() {
    const attrName = this.formControl.name;
    const query = `[name="${attrName}"]`;
    const formControl = this.formControl;
    this.htmlElement = this.elementRef.nativeElement.querySelector(query);
    this.listenFormStatusChanges(formControl);
  }

  private listenFormStatusChanges(formControl: NgControl) {
    if (formControl.statusChanges) {
      formControl.statusChanges.pipe(untilDestroyed(this)).subscribe((result) => this.setModelValidationClass());
    }
  }

  private setModelValidationClass(): void {
    if (!this.htmlElement) {
      return;
    }

    const classList = this.htmlElement.classList;
    classList.remove(this.validClass, this.invalidClass);
    if (this.checkIsValid()) {
      classList.add(this.validClass);
    }
    if (this.checkIsInvalid()) {
      classList.add(this.invalidClass);
    }
  }

  private checkIsValid(): boolean {
    if (!this.formControl) {
      return false;
    }
    return <boolean>(this.formControl.valid && (!this.formControl.pristine || this.formControl.touched));
  }

  private checkIsInvalid(): boolean {
    if (!this.formControl) {
      return false;
    }
    return <boolean>(!this.formControl.valid && (!this.formControl.pristine || this.formControl.touched));
  }
}
