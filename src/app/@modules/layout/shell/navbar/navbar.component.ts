import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar, [app-navbar]',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {
  @HostBinding('class') class = 'c-navbar';

  constructor() {}

  ngOnInit(): void {}
}
