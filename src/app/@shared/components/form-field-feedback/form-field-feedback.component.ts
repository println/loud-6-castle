import { AfterViewInit, Component, ContentChild, ElementRef, Input, OnInit } from '@angular/core';
import { FormControl, NgModel } from '@angular/forms';
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

  @ContentChild(NgModel)
  private model!: NgModel;

  private htmlElement!: HTMLElement;

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
    const attrName = this.model.name;
    const query = `#${attrName}`;
    const formControl = this.model.control;
    this.htmlElement = this.elementRef.nativeElement.querySelector(query);
    this.listenFormStatusChanges(formControl);
  }

  private listenFormStatusChanges(formControl: FormControl) {
    if (formControl) {
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
    if (!this.model) {
      return false;
    }
    return <boolean>(this.model.valid && (!this.model.pristine || this.model.touched));
  }

  private checkIsInvalid(): boolean {
    if (!this.model) {
      return false;
    }
    return <boolean>(!this.model.valid && (!this.model.pristine || this.model.touched));
  }
}
