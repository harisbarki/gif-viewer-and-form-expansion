import {Component} from '@angular/core';

import {formExpander, FORM_ENUM, FormWithCategory, FormType} from './shared/form';

@Component({
  selector: 'app-form-expander',
  templateUrl: './form-expander.page.html',
  styleUrls: ['./form-expander.page.scss'],
})
export class FormExpanderPage {

  FORM_ENUM = FORM_ENUM;
  formExpander = formExpander;

  constructor() {
    console.log(this.formExpander);

  }

  checkIfConditionMet(formE: FormWithCategory, internalForm: FormWithCategory) {
    if (internalForm.dependentOnId) {
      for (let i = 0; i < formE.buttons.length; i++) {
        if (formE.buttons[i].id === internalForm.dependentOnId && formE.buttons[i].value === true) {
          return true;
        }
      }
    } else {
      return true;
    }
  }

  onSave() {
    console.log('saving', this.formExpander);
  }

  onFinish() {
    console.log('finsih', this.formExpander);
  }
}
