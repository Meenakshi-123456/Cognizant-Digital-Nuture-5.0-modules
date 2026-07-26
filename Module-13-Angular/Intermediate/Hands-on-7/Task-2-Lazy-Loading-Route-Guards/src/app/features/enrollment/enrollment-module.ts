import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnrollmentRoutingModule } from './enrollment-routing-module';

import { EnrollmentForm } from './enrollment-form/enrollment-form';
import { ReactiveEnrollmentForm } from './reactive-enrollment-form/reactive-enrollment-form';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    EnrollmentForm,
    ReactiveEnrollmentForm
  ],
 imports: [
  CommonModule,
  EnrollmentRoutingModule,
  ReactiveFormsModule
]
})
export class EnrollmentModule {}