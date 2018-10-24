import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {GifViewerPage} from './gif-viewer.page';

// So they can be imported in the main module easily
export const routingComponents = [
  GifViewerPage
];

const routes: Routes = [
  {
    path: 'gif-viewer',
    component: GifViewerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GifViewerRoutingModule {
}
