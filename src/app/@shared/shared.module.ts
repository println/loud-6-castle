import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ComponentsModule } from '@app/@shared/components/components.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [TranslateModule, CommonModule, ComponentsModule],
  declarations: [],
  exports: [],
})
export class SharedModule {}
