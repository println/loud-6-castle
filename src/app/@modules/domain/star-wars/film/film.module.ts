import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmListComponent } from './film-list/film-list.component';
import { FilmDetailComponent } from './film-detail/film-detail.component';
import { FilmFormComponent } from './film-form/film-form.component';
import { FormsModule } from '@angular/forms';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { ComponentsModule } from '@shared';
import { FilmRoutingModule } from '@modules/domain/star-wars/film/film-routing.module';

@NgModule({
  declarations: [FilmListComponent, FilmDetailComponent, FilmFormComponent],
  imports: [CommonModule, FormsModule, FilmRoutingModule, NgbPaginationModule, ComponentsModule],
})
export class FilmModule {}
