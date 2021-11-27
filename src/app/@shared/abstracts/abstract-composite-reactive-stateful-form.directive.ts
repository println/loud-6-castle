import { ChangeDetectorRef, Directive, OnDestroy, OnInit } from '@angular/core';
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
    protected formNames: string[],
    protected changeDetector: ChangeDetectorRef
  ) {
    super();
    this.listenChanges();
  }

  get isValid(): boolean {
    return this.formNames.every((n: any) => this.formsManager.getControl(n)?.valid);
  }

  ngOnInit(): void {}

  ngOnDestroy() {
    this.formsManager.destroy();
  }

  checkValid(formName: any): boolean {
    if (!this.formsManager.hasControl(formName) && this.isEditing) return true;
    if (!this.formsManager.hasControl(formName)) return false;
    return !!this.formsManager.getControl(formName)?.valid;
  }

  getValues() {
    return {
      valid: this.isValid,
      submitted: false,
      value: Object.assign({}, ...this.formNames.map((n: any) => this.formsManager.getControl(n)?.rawValue)),
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

  private listenChanges(): void {
    this.formNames.forEach((name: any) => {
      this.formsManager
        .controlChanges(name)
        .pipe(untilDestroyed(this))
        .subscribe((control) => {
          this.changeDetector.detectChanges();
        });
    });
  }
}
