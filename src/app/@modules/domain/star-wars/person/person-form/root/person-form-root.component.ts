import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgFormsManager } from '@ngneat/forms-manager';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { AbstractCompositeReactiveStatefulForm } from '@shared/abstracts/abstract-composite-reactive-stateful-form.directive';
import { Film } from '@shared/api/swapi/models/film.model';
import { Person } from '@shared/api/swapi/models/person.model';
import { GridData } from '@shared/components/grid/grid-data.model';
import { PartialFormStore } from '@shared/states/form/partial-form.state';
import { ExtraData } from '../extra-data';

@UntilDestroy()
@Component({
  selector: 'app-person-form-root',
  templateUrl: './person-form-root.component.html',
  styles: [],
  providers: [PartialFormStore],
})
export class PersonFormRootComponent
  extends AbstractCompositeReactiveStatefulForm<PersonForms, Person, ExtraData>
  implements OnInit
{
  constructor(
    protected formsManager: NgFormsManager<PersonForms>,
    protected store: PartialFormStore<Person, ExtraData>,
    protected ref: ChangeDetectorRef,
    private route: ActivatedRoute
  ) {
    super(formsManager, store, ['basic', 'visual', 'extraInfo'], ref);
  }

  ngOnInit(): void {
    this.route.data.pipe(untilDestroyed(this)).subscribe((data) => {
      this.setPristine(data.data);
      this.setStore(this.pristineData, { films: (data.films as GridData<Film>).items });
    });
  }

  save() {
    if (this.isValid) {
      console.log('valid');
      console.log(this.getValues());
    }
  }
}
