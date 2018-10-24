import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FormExpanderPage} from './form-expander.page';

// So they can be imported in the main module easily
export const routingComponents = [
  FormExpanderPage
];

const routes: Routes = [
  {
    path: '',
    component: FormExpanderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormExpanderRoutingModule {
}
