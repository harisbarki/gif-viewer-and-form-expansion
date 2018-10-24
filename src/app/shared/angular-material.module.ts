import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';

import {
  MatCardModule,
  MatFormFieldModule,
  MatSliderModule,
  MatProgressSpinnerModule,
  MatToolbarModule,
  MatButtonModule
} from '@angular/material';

@NgModule({
  imports: [
    FlexLayoutModule,
    MatCardModule,
    MatFormFieldModule,
    MatSliderModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatButtonModule
  ],
  exports: [
    FlexLayoutModule,
    MatCardModule,
    MatFormFieldModule,
    MatSliderModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatButtonModule
  ],
})
export class AngularMaterialModule {
}
