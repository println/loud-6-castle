import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { GridComponent } from '@shared/components/grid/grid.component';
import { PagingComponent } from '@shared/components/paging/paging.component';
import { FormDebugComponent } from '@shared/components/form-debug/form-debug.component';
import { LoaderComponent } from '@shared/components/loader/loader.component';
import { SearchBarComponent } from '@shared/components/search-bar/search-bar.component';
import { PageComponent } from '@shared/components/page/page.component';
import { FormComponent } from '@shared/components/form/form.component';
import { FormAsyncModelDirective } from '@shared/components/form/form-async-model.directive';
import { FormFieldFeedbackComponent } from '@shared/components/form-field-feedback/form-field-feedback.component';
import { ReactiveTextComponent } from '@shared/components/reactive-fields/reactive-text.component';
import { ReactiveFeedbackComponent } from '@shared/components/reactive-fields/reactive-feedback.component';
import { ReactiveComboComponent } from '@shared/components/reactive-fields/reactive-combo.component';
import { ReactiveUsernameComponent } from '@shared/components/reactive-fields/reactive-username.component';
import { ReactiveComboMultiComponent } from '@shared/components/reactive-fields/reactive-combo-multi.component';

@NgModule({
  declarations: [
    GridComponent,
    PagingComponent,
    LoaderComponent,
    FormDebugComponent,
    SearchBarComponent,
    PageComponent,
    FormComponent,
    FormFieldFeedbackComponent,
    ReactiveFeedbackComponent,
    FormAsyncModelDirective,
    ReactiveTextComponent,
    ReactiveComboComponent,
    ReactiveComboMultiComponent,
    ReactiveUsernameComponent,
  ],
  imports: [CommonModule, NgbPaginationModule, FormsModule, ReactiveFormsModule],
  exports: [
    GridComponent,
    LoaderComponent,
    FormDebugComponent,
    PageComponent,
    FormComponent,
    FormFieldFeedbackComponent,
    FormAsyncModelDirective,
    ReactiveTextComponent,
    ReactiveComboComponent,
    ReactiveComboMultiComponent,
    ReactiveUsernameComponent,
  ],
})
export class ComponentsModule {}
