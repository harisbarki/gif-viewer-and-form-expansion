import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from 'src/app/shared/shared.module';

import {GifViewerRoutingModule, routingComponents} from './gif-viewer-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    GifViewerRoutingModule
  ],
  declarations: [routingComponents]
})
export class GifViewerModule {
}
