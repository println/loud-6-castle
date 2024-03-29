import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { ComponentsModule } from '@shared';
import { AccountDetailComponent } from './account-detail/account-detail.component';
import { AccountListComponent } from './account-list/account-list.component';

import { AccountRoutingModule } from './account-routing.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [AccountListComponent, AccountDetailComponent],
  imports: [CommonModule, AccountRoutingModule, ComponentsModule, NgbNavModule, TranslateModule],
})
export class AccountModule {}
