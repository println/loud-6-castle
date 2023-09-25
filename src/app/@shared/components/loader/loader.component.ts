import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  imports: [CommonModule],
  host: { class: 'o-loader' },
})
export class LoaderComponent implements OnInit {
  @Input({ required: false }) isLoading = false;
  @Input() isExpandable: boolean = false;
  @Input() message?: string;

  constructor() {}

  ngOnInit() {}
}
