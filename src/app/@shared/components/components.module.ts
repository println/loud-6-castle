import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { GridComponent } from '@shared/components/grid/grid.component';
import { PagingComponent } from '@shared/components/paging/paging.component';
import { FormDebugComponent } from '@shared/components/form-debug/form-debug.component';
import { LoaderComponent } from '@shared/components/loader/loader.component';
import { SearchBarComponent } from '@shared/components/search-bar/search-bar.component';
import { PageComponent } from '@shared/components/page/page.component';

@NgModule({
  declarations: [
    GridComponent,
    PagingComponent,
    LoaderComponent,
    FormDebugComponent,
    SearchBarComponent,
    PageComponent,
  ],
  imports: [CommonModule, NgbPaginationModule, FormsModule],
  exports: [GridComponent, LoaderComponent, FormDebugComponent, PageComponent],
})
export class ComponentsModule {}
