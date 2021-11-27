import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { FormComponent } from '@shared';
import { Film } from '@shared/api/swapi/models/film.model';
import { FilmService } from '../film.service';

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

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private service: FilmService
  ) {}

  ngOnInit() {
    this.route.data.pipe(untilDestroyed(this)).subscribe((data) => {
      this.pristineData = data.data;
      this.formData = { ...this.pristineData };
    });

    this.formR = this.formBuilder.group({
      title: [this.formData?.title, Validators.required],
    });
  }

  save(entity: Film) {
    const instance = this.createFilm();
    instance.title = entity.title;
    this.service.create(instance).subscribe(
      (val) => {
        console.log('CREATE call successful value returned in body', val);
        this.router.navigate([val], { relativeTo: this.route.parent });
      },
      (response) => {
        window.alert('CREATE call in error');
        console.log('CREATE call in error', response);
      }
    );
  }

  update(entity: Film, id: any) {
    this.service.update(id, entity).subscribe(
      (val) => {
        console.log('UPDATE call successful value returned in body', val);
        this.router.navigate(['../'], { relativeTo: this.route });
      },
      (response) => {
        window.alert('UPDATE call in error');
        console.log('UPDATE call in error', response);
      }
    );
  }

  submit() {
    if (this.pristineData) {
      this.update(this.formR.value, this.pristineData.id);
    } else {
      this.save(this.formR.value);
    }
    return false;
  }

  private createFilm(): Film {
    return {
      id: 0,
      title: '',
      episode_id: getRandomArbitrary(7, 20),
      opening_crawl: 'sinopse',
      director: 'director',
      producer: 'string',
      release_date: new Date(),
      characters: ['https://swapi.dev/api/people/2/'],
      planets: ['https://swapi.dev/api/planets/1/'],
      starships: ['https://swapi.dev/api/starships/21/'],
      vehicles: ['https://swapi.dev/api/vehicles/4/'],
      species: ['https://swapi.dev/api/species/1/'],
      created: new Date().toISOString().substring(0, 10),
      edited: new Date().toISOString().substring(0, 10),
      url: 'https://swapi.dev/api/films/',
    };
  }
}

function getRandomArbitrary(min: number, max: number) {
  return Math.random() * (max - min) + min;
}
