import { Component, Input, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-form-field-feedback, [app-form-field-feedback]',
  templateUrl: './form-field-feedback.component.html',
  styleUrls: ['./form-field-feedback.component.scss'],
})
export class FormFieldFeedbackComponent implements OnInit {
  @Input() model: NgModel | undefined;
  @Input() feedbackMessage = true;
  @Input() validFeedbackMessage = true;
  @Input() invalidFeedbackMessage = true;

  constructor() {}

  get isValid(): boolean {
    if (this.model) {
      return <boolean>(this.model.valid && this.model.touched);
    }
    return false;
  }

  get isInvalid(): boolean {
    if (this.model) {
      return <boolean>(!this.model.valid && this.model.touched);
    }
    return false;
  }

  ngOnInit(): void {}
}
