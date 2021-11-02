import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
})
export class ShellComponent implements OnInit {
  @HostBinding('class') class = 'c-shell';

  constructor() {}

  ngOnInit() {}
}
