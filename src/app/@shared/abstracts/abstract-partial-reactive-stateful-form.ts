import { Directive, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NgFormsManager } from '@ngneat/forms-manager';
import { ControlFactory, HashMap } from '@ngneat/forms-manager/lib/types';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import clone from '@shared/mixins/clone';
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
      });
  }

  ngOnDestroy() {
    this.formsManager.unsubscribe(this.formName);
  }

  protected abstract createFormGroup(): void;

  protected clone<F>(data: F): F {
    return clone(data);
  }

  private bindToFormManager() {
    this.formsManager.upsert(this.formName, this.formGroup, {
      arrControlFactory: this.arrControlFactory,
    });
  }
}
