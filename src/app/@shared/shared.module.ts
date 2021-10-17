import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ComponentsModule } from '@app/@shared/components/components.module';
import { LoaderComponent } from '@shared/components/loader/loader.component';

@NgModule({
  imports: [TranslateModule, CommonModule, ComponentsModule],
  declarations: [],
  exports: [LoaderComponent],
})
export class SharedModule {}
