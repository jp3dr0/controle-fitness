import { NgModule } from "@angular/core";
import {
  MatButtonModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatDatepickerModule,
  MAT_DATE_LOCALE,
  MatCheckboxModule,
  MatSidenavModule,
  MatToolbarModule,
  MatListModule,
  MatTabsModule,
  MatCardModule,
  MatSelectModule,
  MatProgressSpinnerModule,
  MatDialogModule
} from "@angular/material";

import { MatMomentDateModule } from "@angular/material-moment-adapter";

@NgModule({
  imports: [
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatTabsModule,
    MatCardModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatDialogModule
  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatTabsModule,
    MatCardModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatDialogModule
  ],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: "pt-BR" }]
})
export class MaterialModule {}
