import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '../../../../node_modules/@angular/forms';
import { HttpClientModule } from '../../../../node_modules/@angular/common/http';
import { HttpModule } from '../../../../node_modules/@angular/http';
import { dashboardComponents } from '.';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpModule
  ],
  declarations: [
    ...dashboardComponents
  ],
  exports: [
    ...dashboardComponents
  ]
})
export class DashboardModule { }
