import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ComponentsModule } from '@shared';
import { SessionDetailComponent } from './session-detail/session-detail.component';
import { SessionListComponent } from './session-list/session-list.component';

import { SessionRoutingModule } from './session-routing.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [SessionListComponent, SessionDetailComponent],
  imports: [CommonModule, SessionRoutingModule, ComponentsModule, TranslateModule],
})
export class SessionModule {}
