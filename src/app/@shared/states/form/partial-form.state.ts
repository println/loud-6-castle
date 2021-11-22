import { Injectable } from '@angular/core';
import { guid, Query, Store } from '@datorama/akita';

type PartialFormState<T = any, E = any> = {
  pristineData: T;
  extraData: E;
};

@Injectable()
export class PartialFormStore<T = any, E = any> extends Store<PartialFormState<T, E>> {
  constructor() {
    super(
      {
        pristineData: {} as T,
        extraData: {} as E,
      },
      { name: `PartialFormStore-${guid()}` }
    );
  }
}

@Injectable()
export class PartialFormQuery<T = any, E = any> extends Query<PartialFormState<T, E>> {
  constructor(protected store: PartialFormStore<T, E>) {
    super(store);
  }
}
