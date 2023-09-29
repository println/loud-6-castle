import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IfRoleDirective } from '@app/@shared/directives/role.directive';
import { TranslateModule } from '@ngx-translate/core';
import { SideNavbarComponent } from '@shared/components/navbar/side-navbar.component';
import { AdminMenuComponent } from './admin-menu.component';
import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
  declarations: [AdminMenuComponent],
  imports: [CommonModule, AdminRoutingModule, TranslateModule, SideNavbarComponent, IfRoleDirective],
})
export class AdminModule {}
