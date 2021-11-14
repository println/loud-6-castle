import { Component, OnInit, ViewChild } from '@angular/core';
import { Film } from '@shared/api/swapi/models/film.model';
import { ActivatedRoute } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { FormComponent } from '@shared';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@UntilDestroy()
@Component({
  selector: 'app-film-form',
  templateUrl: './film-form.component.html',
})
export class FilmFormComponent implements OnInit {
  pristineData!: Film;
  formData: Film = {} as Film;

  formR!: FormGroup;

  @ViewChild(FormComponent) form!: FormComponent;

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.data.pipe(untilDestroyed(this)).subscribe((data) => {
      this.pristineData = data.data;
      this.formData = { ...this.pristineData };
    });

    this.formR = this.formBuilder.group({
      title: [this.formData?.title, Validators.required],
    });
  }
}
