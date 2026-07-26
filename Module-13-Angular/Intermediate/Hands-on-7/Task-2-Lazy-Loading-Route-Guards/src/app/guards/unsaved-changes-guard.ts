import { CanDeactivateFn } from '@angular/router';

export const UnsavedChangesGuard: CanDeactivateFn<any> = (component) => {

  if (component.enrollForm?.dirty) {

    return window.confirm(
      'You have unsaved changes. Leave?'
    );

  }

  return true;

};