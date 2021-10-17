import { Component, Input, isDevMode, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-debug',
  templateUrl: './form-debug.component.html',
  styleUrls: ['./form-debug.component.scss'],
})
export class FormDebugComponent implements OnInit {
  @Input() form: NgForm | undefined;

  isDev = isDevMode();

  constructor() {}

  ngOnInit() {}
}
