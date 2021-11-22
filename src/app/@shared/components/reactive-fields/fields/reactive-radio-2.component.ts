// import { AfterViewInit, Component, Input, OnInit, QueryList, ViewChildren } from '@angular/core';
// import {
//   AbstractControl,
//   ControlContainer,
//   ControlValueAccessor,
//   FormControl,
//   FormControlDirective,
//   NG_VALUE_ACCESSOR,
// } from '@angular/forms';
// import SelectedItem from './selected-item.models';
//
// @Component({
//   selector: 'app-reactive-radio[formControlName][data]',
//   template: `
//     <div class="form-check" *ngFor="let item of data">
//       <input
//         class="form-check-input"
//         type="radio"
//         [name]="name"
//         [id]="getId(item)"
//         [formControl]="control"
//         [value]="item.value"
//       />
//       <label class="form-check-label" [for]="getId(item)"> {{ item.label }} </label>
//     </div>
//   `,
//   providers: [
//     {
//       provide: NG_VALUE_ACCESSOR,
//       useExisting: ReactiveRadioComponent,
//       multi: true,
//     },
//   ],
// })
// export class ReactiveRadioComponent implements OnInit, AfterViewInit, ControlValueAccessor {
//   @Input() data!: SelectedItem[];
//
//   @ViewChildren(FormControlDirective)
//   formControlDirectiveQueryList: QueryList<FormControlDirective> | undefined;
//
//   @Input() feedbackMessage = true;
//   @Input() validFeedbackMessage = true;
//   @Input() invalidFeedbackMessage = true;
//
//   @Input() formControl!: FormControl;
//   @Input() formControlName!: string;
//   @Input() id!: string;
//   @Input() name!: string;
//
//   constructor(private controlContainer: ControlContainer) {}
//
//   get control() {
//     return this.formControl || this.controlContainer?.control?.get(this.formControlName);
//   }
//
//   get required(): boolean {
//     if (!this.control || !this.control.validator) {
//       return false;
//     }
//     const validator = this.control.validator({} as AbstractControl);
//     return validator && validator.required;
//   }
//
//   registerOnTouched(fn: any): void {
//     // this.formControlDirectiveQueryList?.forEach((directive) => {
//     //   directive.valueAccessor?.registerOnTouched(fn);
//     // });
//   }
//
//   registerOnChange(fn: any): void {
//     // this.formControlDirectiveQueryList?.forEach((directive) => {
//     //   directive.valueAccessor?.registerOnChange(fn);
//     // });
//   }
//
//   writeValue(obj: any): void {
//     // this.formControlDirectiveQueryList?.forEach((directive) => {
//     //   directive.valueAccessor?.writeValue(obj);
//     // });
//   }
//
//   setDisabledState(isDisabled: boolean): void {
//     // this.formControlDirectiveQueryList?.forEach((directive) => {
//     //   if (directive.valueAccessor?.setDisabledState) {
//     //     directive.valueAccessor?.setDisabledState(isDisabled);
//     //   }
//     // });
//   }
//
//   ngOnInit(): void {
//     this.id = this.id ? this.id : this.formControlName;
//     this.name = this.name ? this.name : this.formControlName;
//   }
//
//   ngAfterViewInit(): void {}
//
//   getId(item: SelectedItem): any {
//     return `${this.id}-${item.value}`;
//   }
// }
