import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootComponent } from './root/root.component';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '@shared';
import { StarWarsRoutingModule } from '@modules/domain/star-wars/star-wars-routing.module';

@NgModule({
  declarations: [RootComponent],
  imports: [CommonModule, StarWarsRoutingModule, TranslateModule, SharedModule],
})
export class StarWarsModule {}
