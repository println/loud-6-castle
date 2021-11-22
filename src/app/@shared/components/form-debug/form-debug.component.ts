import { Component, Input, isDevMode, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-debug',
  templateUrl: './form-debug.component.html',
})
export class FormDebugComponent implements OnInit {
  @Input() form: NgForm | FormGroup | any | undefined;

  isDev = isDevMode();

  constructor() {}

  ngOnInit() {}
}
