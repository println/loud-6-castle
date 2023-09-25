import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
})
export class PageComponent implements OnInit {
  constructor() {
    console.log('criado', new Date().getTime());
  }

  ngOnInit(): void {
    console.log('iniciado', new Date().getTime());
  }
}
