import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './material/material.module';

import { PageHeaderComponent } from './page-header/page-header.component';
import { PageFooterComponent } from './page-footer/page-footer.component';

@NgModule({
  declarations: [
    PageHeaderComponent,
    PageFooterComponent
  ],
  exports: [
    MaterialModule,
    PageHeaderComponent,
    PageFooterComponent,
    ReactiveFormsModule
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }