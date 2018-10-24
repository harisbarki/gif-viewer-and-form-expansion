import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from 'src/app/shared/shared.module';

import {FormExpanderRoutingModule, routingComponents} from './form-expander-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormExpanderRoutingModule
  ],
  declarations: [routingComponents]
})
export class FormExpanderModule {
}
