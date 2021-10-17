import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PagingData } from '@shared/components/paging/paging-data.model';

@Component({
  selector: 'app-paging',
  templateUrl: './paging.component.html',
  styleUrls: ['./paging.component.scss'],
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
