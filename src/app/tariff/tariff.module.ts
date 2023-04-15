import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TariffRoutingModule } from './tariff-routing.module';
import { TariffComponent } from './tariff.component';

import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TariffResultComponent } from './tariff-result/tariff-result.component';
import { DialogModule } from '@angular/cdk/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    TariffComponent,
    TariffResultComponent
  ],
  imports: [
    CommonModule,
    TariffRoutingModule,
    MatCardModule,
    MatDividerModule,
    MatProgressBarModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DialogModule,
    MatSnackBarModule
  ]
})
export class TariffModule { }
