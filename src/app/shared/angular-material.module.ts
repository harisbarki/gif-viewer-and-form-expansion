import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';

import {
  MatCardModule,
  MatFormFieldModule,
  MatSliderModule,
  MatProgressSpinnerModule,
  MatToolbarModule,
  MatButtonModule,
  MatRadioModule,
  MatCheckboxModule,
} from '@angular/material';

@NgModule({
  imports: [
    FlexLayoutModule,
    MatCardModule,
    MatFormFieldModule,
    MatSliderModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatButtonModule,
    MatRadioModule,
    MatCheckboxModule,
  ],
  exports: [
    FlexLayoutModule,
    MatCardModule,
    MatFormFieldModule,
    MatSliderModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatButtonModule,
    MatRadioModule,
    MatCheckboxModule,
  ],
})
export class AngularMaterialModule {
}
