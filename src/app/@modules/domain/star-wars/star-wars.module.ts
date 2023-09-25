import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StarWarsRoutingModule } from '@modules/domain/star-wars/star-wars-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { SideNavbarComponent } from '@shared/components/navbar/side-navbar.component';
import { StarwarsMenuComponent } from './starwars-menu.component';

@NgModule({
  declarations: [StarwarsMenuComponent],
  imports: [CommonModule, StarWarsRoutingModule, TranslateModule, SideNavbarComponent],
})
export class StarWarsModule {}
