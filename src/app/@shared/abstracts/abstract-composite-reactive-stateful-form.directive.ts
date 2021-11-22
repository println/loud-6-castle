import { Directive, OnDestroy, OnInit } from '@angular/core';
import { NgFormsManager } from '@ngneat/forms-manager';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { PartialFormStore } from '../states/form/partial-form.state';
import { BasicForm } from './basic-form';

@UntilDestroy()
@Directive()
export abstract class AbstractCompositeReactiveStatefulForm<M, P, E> extends BasicForm<P> implements OnInit, OnDestroy {
  protected constructor(
    protected formsManager: NgFormsManager<M>,
    protected store: PartialFormStore<P, E>,
    protected formNames: string[]
  ) {
    super();
    this.listenValid();
  }

  private _isValid = {};

  get isValid(): boolean {
    const values = Object.values(this._isValid);
    return values.length == this.formNames.length && values.every((v) => v);
  }

  ngOnInit(): void {}

  ngOnDestroy() {
    this.formsManager.destroy();
  }

  checkValid(formName: string): boolean {
    return !!this._isValid[formName];
  }

  getValues() {
    return {
      valid: this.isValid,
      submitted: false,
      value: Object.assign({}, ...this.formNames.map((n: any) => this.formsManager.getControl(n)?.value)),
    };
  }

  protected setPristine(pristine: P) {
    Object.assign(this.pristineData, pristine);
  }

  protected setStore(pristine: P, extra: E) {
    this.store.update(({ pristineData, extraData }) => ({
      pristineData: pristine,
      extraData: extra,
    }));
  }

  private listenValid(): void {
    this.formNames.forEach((name: any) => {
      this.formsManager
        .controlChanges(name)
        .pipe(untilDestroyed(this))
        .subscribe((control) => {
          this._isValid[name] = control.valid;
        });
    });
  }
}
