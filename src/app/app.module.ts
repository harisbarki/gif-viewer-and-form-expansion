import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app.routing.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {GifViewerModule} from './pages/gif-viewer/gif-viewer.module';

import {SharedModule} from 'src/app/shared/shared.module';

import {AppComponent} from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    SharedModule,
    AppRoutingModule,
    GifViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
