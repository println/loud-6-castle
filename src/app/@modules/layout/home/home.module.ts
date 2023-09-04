import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { LoaderComponent, SharedModule } from '@shared';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [CommonModule, TranslateModule, SharedModule, HomeRoutingModule, LoaderComponent],
  declarations: [HomeComponent],
})
export class HomeModule {}
