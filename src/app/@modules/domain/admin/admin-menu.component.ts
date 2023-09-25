import { Component, OnInit } from '@angular/core';
import { ROUTES } from '@config';
import { UntilDestroy } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-admin-menu',
  templateUrl: './admin-menu.component.html',
  host: { class: 'd-flex flex-grow-1' },
})
export class AdminMenuComponent implements OnInit {
  routes = ROUTES;
  ngOnInit(): void {}
}
