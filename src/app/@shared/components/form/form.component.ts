import {
  AfterContentInit,
  AfterViewChecked,
  Component,
  ContentChildren,
  EventEmitter,
  Input,
  OnInit,
  Output,
  QueryList,
  ViewChild,
} from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit, AfterContentInit, AfterViewChecked {
  @Input() edit = false;
  @Output() formSubmit: EventEmitter<{}> = new EventEmitter();

  @ContentChildren(NgModel, { descendants: true })
  models: QueryList<NgModel> = {} as QueryList<NgModel>;

  @ViewChild('customForm', { static: true })
  form: NgForm = {} as NgForm;

  constructor() {}

  ngOnInit(): void {}

  public ngAfterContentInit(): void {
    this.addModelsToForm();
  }

  public ngAfterViewChecked() {
    if (this.edit) {
      this.form.form.markAllAsTouched();
    }
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.formSubmit.emit(form.value);
    } else {
      console.log('Form is invalid!');
    }
  }

  resetControls() {
    console.log('reset');
    this.removeAllModelsInForm();
    this.addModelsToForm();
  }

  private addModelsToForm() {
    let ngContentModels = this.models.toArray();
    ngContentModels.forEach((model) => {
      this.form.addControl(model);
    });
  }

  private removeAllModelsInForm() {
    let ngContentModels = this.models.toArray();
    ngContentModels.forEach((model) => {
      this.form.removeControl(model);
    });
  }
}
