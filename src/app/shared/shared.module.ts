import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ConfirmationDialogComponent} from './components/confirmation-dialog/confirmation-dialog.component';
import {ErrorDialogComponent} from './components/error-dialog/error-dialog.component';
import {MaterialModule} from "../material/material.module";


@NgModule({
  declarations: [
    ConfirmationDialogComponent,
    ErrorDialogComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    ConfirmationDialogComponent,
    ErrorDialogComponent,
  ]
})
export class SharedModule {
}
