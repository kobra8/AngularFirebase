import { NgModule } from '@angular/core';
import {
  MatFormFieldModule,
  MatIconModule,
  MatCardModule,
  MatInputModule,
  MatDialogModule,
  MatButtonModule,
  MatSnackBarModule,
  MatCheckboxModule,
  MatSelectModule,
  MatToolbarModule
} from '@angular/material';

const MATERIAL_MODULES = [
  MatIconModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatDialogModule,
  MatButtonModule,
  MatSnackBarModule,
  MatCheckboxModule,
  MatSelectModule,
  MatToolbarModule
];

@NgModule({
  exports: [...MATERIAL_MODULES],
  declarations: []
})
export class MaterialModule { }
