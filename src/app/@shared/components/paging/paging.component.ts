import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { PagingData } from './paging-data.model';

@Component({
  standalone: true,
  selector: 'app-paging',
  templateUrl: './paging.component.html',
  imports: [NgbPaginationModule],
})
export class PagingComponent implements OnInit {
  @Input() data: PagingData | undefined;
  @Input() isLoading: boolean = false;
  @Output() changePage: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onChangePage(event: any) {
    if (event) {
      const nextPage = parseInt(event);
      this.changePage.emit(nextPage);
    }
  }
}
