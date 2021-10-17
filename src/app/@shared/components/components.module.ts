import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { GridComponent } from '@shared/components/grid/grid.component';
import { PagingComponent } from '@shared/components/paging/paging.component';
import { FormDebugComponent } from '@shared/components/form-debug/form-debug.component';
import { LoaderComponent } from '@shared/components/loader/loader.component';

@NgModule({
  declarations: [GridComponent, PagingComponent, LoaderComponent, FormDebugComponent],
  imports: [CommonModule, NgbPaginationModule],
  exports: [GridComponent, LoaderComponent, FormDebugComponent],
})
export class ComponentsModule {}
