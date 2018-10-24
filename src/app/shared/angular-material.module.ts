import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';

import {
  MatCardModule,
  MatFormFieldModule,
  MatSliderModule,
  MatProgressSpinnerModule,
  MatToolbarModule
} from '@angular/material';

@NgModule({
  imports: [
    FlexLayoutModule,
    MatCardModule,
    MatFormFieldModule,
    MatSliderModule,
    MatProgressSpinnerModule,
    MatToolbarModule
  ],
  exports: [
    FlexLayoutModule,
    MatCardModule,
    MatFormFieldModule,
    MatSliderModule,
    MatProgressSpinnerModule,
    MatToolbarModule
  ],
})
export class AngularMaterialModule {
}
