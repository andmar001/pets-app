import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// angular material modules

import { MatSliderModule } from "@angular/material/slider";
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';  


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
  ],
  exports: [
    BrowserAnimationsModule,
    MatSliderModule,
    MatTableModule,
    MatButtonModule,
    MatPaginatorModule
  ]
})
export class MaterialModule { }
