import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// angular material modules

import { MatSliderModule } from "@angular/material/slider";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatSliderModule
  ],
  exports: [
    MatSliderModule
  ]
})
export class MaterialModule { }
