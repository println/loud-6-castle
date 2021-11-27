import { Directive, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { NgFormsManager } from '@ngneat/forms-manager';
import { ControlFactory, HashMap } from '@ngneat/forms-manager/lib/types';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { PartialFormQuery } from '../states/form/partial-form.state';
import { BasicForm } from './basic-form';

@UntilDestroy()
@Directive()
export abstract class AbstractPartialReactiveStatefulForm<M, P, E> extends BasicForm<P> implements OnInit, OnDestroy {
  extraData: E = {} as E;
  formGroup!: FormGroup;

  protected constructor(
    protected formsManager: NgFormsManager<M>,
    protected query: PartialFormQuery<P, E>,
    protected formName: any
  ) {
    super();
  }

  protected get arrControlFactory(): ControlFactory | HashMap<ControlFactory> {
    return {};
  }

  ngOnInit(): void {
    this.query
      .select()
      .pipe(untilDestroyed(this))
      .subscribe((state) => {
        Object.assign(this.pristineData, state.pristineData);
        this.extraData = state.extraData;
        this.createFormGroup();
        this.bindToFormManager();
        this.formGroup.updateValueAndValidity();
      });
  }

  ngOnDestroy() {
    this.formsManager.unsubscribe(this.formName);
    this.updateFormsManagerState();
  }

  protected abstract createFormGroup(): void;

  private updateFormsManagerState() {
    const stateControl = this.formsManager.getControl(this.formName) as any;
    this.updateStateFromForm(this.formGroup, stateControl);
  }

  private bindToFormManager() {
    const latestStateControl = this.formsManager.getControl(this.formName) as any;

    this.formsManager.upsert(this.formName, this.formGroup, {
      arrControlFactory: this.arrControlFactory,
    });

    this.updateFormFromState(latestStateControl, this.formGroup);
  }

  private updateFormFromState(stateControls: any, formControls: FormGroup | FormArray) {
    if (!stateControls) return;

    Object.keys(stateControls.controls).forEach((k) => {
      const stateControl = stateControls.controls[k];
      const formControl = formControls.controls[k];

      if (stateControl.dirty) {
        formControl.markAsDirty();
      }

      if (stateControl.touched) {
        formControl.markAsTouched();
      }

      if (formControl instanceof FormGroup || formControl instanceof FormArray) {
        this.updateFormFromState(stateControl, formControl);
      }
    });
  }

  private updateStateFromForm(formControls: FormGroup | FormArray, stateControls: any) {
    if (!stateControls) return;
    if (!formControls) return;

    Object.keys(formControls.controls).forEach((k) => {
      const stateControl = stateControls.controls[k];
      const formControl = formControls.controls[k];

      if (formControl.dirty) {
        stateControl.dirty = true;
      }

      if (formControl.touched) {
        stateControl.touched = true;
      }

      if (formControl instanceof FormGroup || formControl instanceof FormArray) {
        this.updateStateFromForm(formControl, stateControl);
      }
    });
  }
}
