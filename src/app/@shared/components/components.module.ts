import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { FormDebugComponent } from './form-debug/form-debug.component';
import { FormFieldFeedbackComponent } from './form-field-feedback/form-field-feedback.component';
import { FormAsyncModelDirective } from './form/form-async-model.directive';
import { FormComponent } from './form/form.component';
import { GridComponent } from './grid/grid.component';
import { LoaderComponent } from './loader/loader.component';
import { PageComponent } from './page/page.component';
import { PagingComponent } from './paging/paging.component';
import {
  ReactivePartialFormComponent,
  ReactiveComboComponent,
  ReactiveComboMultiComponent,
  ReactiveFeedbackComponent,
  ReactiveRadioComponent,
  ReactiveTextComponent,
  ReactiveUsernameComponent,
  ReactivePasswordComponent,
} from './reactive-form';
import { SearchBarComponent } from './search-bar/search-bar.component';

@NgModule({
  declarations: [
    FormDebugComponent,
    PageComponent,
    FormComponent,
    ReactivePartialFormComponent,
    FormFieldFeedbackComponent,
    ReactiveFeedbackComponent,
    FormAsyncModelDirective,
    ReactiveTextComponent,
    ReactivePasswordComponent,
    ReactiveComboComponent,
    ReactiveComboMultiComponent,
    ReactiveUsernameComponent,
    ReactiveRadioComponent,
  ],
  imports: [
    CommonModule,
    NgbPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    LoaderComponent,
    SearchBarComponent,
    PagingComponent,
    GridComponent,
    TranslateModule,
  ],
  exports: [
    GridComponent,
    FormDebugComponent,
    PageComponent,
    FormComponent,
    FormFieldFeedbackComponent,
    FormAsyncModelDirective,
    ReactiveTextComponent,
    ReactiveComboComponent,
    ReactiveComboMultiComponent,
    ReactiveUsernameComponent,
    ReactiveRadioComponent,
    ReactivePartialFormComponent,
    ReactivePasswordComponent,
  ],
})
export class ComponentsModule {}
