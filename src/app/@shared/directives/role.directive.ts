import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { UserQuery } from '@shared';

@Directive({ 
  standalone: true,
  selector: '[ifRole]',
})
export class IfRoleDirective {
  @Input({ required: true, alias: 'ifRole' })
  roleName: string = '';

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private userQuery: UserQuery
  ) {}

  ngOnInit() {
    if (this.userQuery.isLoggedIn()) {
      this.viewContainer.clear();      
      if (this.userQuery.isAdmin() || this.userQuery.getRole().toLowerCase() === this.roleName.toLowerCase()) {
        this.viewContainer.createEmbeddedView(this.templateRef);
      }
    }
  }

  ngOnDestroy() {}
}
