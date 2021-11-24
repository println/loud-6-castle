import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  OnInit,
} from '@angular/core';
import { FormControlName, NgControl } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-reactive-feedback, [app-reactive-feedback]',
  template: `
    <ng-content></ng-content>
    <div *ngIf="feedbackMessage && invalidFeedbackMessage && isInvalid" class="invalid-feedback">
      <span #invalidText><ng-content select="[invalid]"></ng-content></span>
      <span *ngIf="!invalidText.children.length">Please provide a valid value</span>
    </div>

    <div *ngIf="feedbackMessage && validFeedbackMessage && isValid" class="valid-feedback">
      <span #validText><ng-content select="[valid]"></ng-content></span>
      <span *ngIf="!validText.children.length">Valid!</span>
    </div>
  `,
})
export class ReactiveFeedbackComponent implements OnInit, AfterViewInit {
  @Input() feedbackMessage = true;
  @Input() validFeedbackMessage = true;
  @Input() invalidFeedbackMessage = true;
  @Input() validClass = 'is-valid';
  @Input() invalidClass = 'is-invalid';
  @Input() control!: FormControlName;
  @Input() name!: string;

  private htmlElement: any;

  constructor(private elementRef: ElementRef, private ref: ChangeDetectorRef) {}

  get isValid(): boolean {
    this.setModelValidationClass();
    return this.checkIsValid();
  }

  get isInvalid(): boolean {
    this.setModelValidationClass();
    return this.checkIsInvalid();
  }

  ngOnInit(): void {
    this.listenFormStatusChanges(this.control);
  }

  ngAfterViewInit() {
    const query = `[name="${this.name}"]`;
    this.htmlElement = this.elementRef.nativeElement.querySelector(query);
    this.ref.detectChanges();
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
    if (!this.control) {
      return false;
    }
    if (this.control.disabled) {
      return false;
    }
    return <boolean>(this.control.valid && (!this.control.pristine || this.control.touched));
  }

  private checkIsInvalid(): boolean {
    if (!this.control) {
      return false;
    }
    if (this.control.disabled) {
      return false;
    }
    return <boolean>(!this.control.valid && (!this.control.pristine || this.control.touched));
  }
}
