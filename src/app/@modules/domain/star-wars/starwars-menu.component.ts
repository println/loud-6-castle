import { Component, OnInit } from '@angular/core';
import { ROUTES } from '@config';
import { UntilDestroy } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-starwars-menu',
  templateUrl: './starwars-menu.component.html',
})
export class StarwarsMenuComponent implements OnInit {
  routes = ROUTES;
  ngOnInit(): void {}
}
