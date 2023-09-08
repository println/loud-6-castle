import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { UserQuery } from '@shared';

@Directive({ selector: '[ifRole]' })
export class IfRoleDirective {
  @Input({ required: true, alias: 'ifRole' })
  roleName: string;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private userQuery: UserQuery
  ) {}

  ngOnInit() {
    if (this.userQuery.isLoggedIn()) {
      console.log(this.userQuery.getRole());
      this.viewContainer.clear();
      if (this.userQuery.getRole().toLowerCase() === this.roleName.toLowerCase()) {
        this.viewContainer.createEmbeddedView(this.templateRef);
      }
    }
  }

  ngOnDestroy() {}
}
