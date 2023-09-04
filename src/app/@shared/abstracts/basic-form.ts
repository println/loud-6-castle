import clone from '@shared/mixins/clone';

export abstract class BasicForm<P> {
  pristineData: any = {} as P;

  get isEditing() {
    if (!this.pristineData) {
      return false;
    }

    if (this.pristineData['id']) {
      return true;
    }

    return Object.keys(this.pristineData).length > 0;
  }

  protected clone<F>(data: F): F {
    return clone(data);
  }
}
