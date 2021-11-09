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
import { NgForm, NgModel, NgModelGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
})
export class FormComponent implements OnInit, AfterContentInit {
  @Input() edit = false;
  @Output() ngSubmit: EventEmitter<{}> = new EventEmitter();

  @ContentChildren(NgModel, { descendants: true })
  models: QueryList<NgModel> = {} as QueryList<NgModel>;

  @ViewChild('customForm', { static: true })
  form: NgForm = {} as NgForm;

  constructor() {}

  ngOnInit(): void {}

  public ngAfterContentInit(): void {
    this.addModelsToForm();
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.ngSubmit.emit(form.value);
    } else {
      console.log('Form is invalid!');
    }
  }

  addControl(model: NgModel) {
    this.form.addControl(model);
    if (this.edit) {
      model.control.markAsTouched();
    }
  }

  removeControl(model: NgModel) {
    this.form.removeControl(model);
  }

  resetControls() {
    this.removeAllModelsInForm();
    this.addModelsToForm();
  }

  private addModelsToForm() {
    let ngContentModels = this.models.toArray();
    ngContentModels.forEach((model) => {
      this.addControl(model);
    });
  }

  private removeAllModelsInForm() {
    let ngContentModels = this.models.toArray();
    ngContentModels.forEach((model) => {
      this.removeControl(model);
    });
  }
}
