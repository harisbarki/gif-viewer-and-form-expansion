import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

// import {
// } from './pages/';

// So they can be imported in the main module easily
export const routingComponents = [];

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'gif-viewer',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'gif-viewer'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

