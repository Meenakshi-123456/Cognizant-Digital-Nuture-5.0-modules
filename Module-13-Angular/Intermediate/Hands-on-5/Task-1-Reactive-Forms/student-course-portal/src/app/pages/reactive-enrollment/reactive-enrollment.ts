import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-enrollment',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-enrollment.html',
  styleUrl: './reactive-enrollment.css'
})
export class ReactiveEnrollmentComponent implements OnInit {

  enrollForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {

    this.enrollForm = this.fb.group({

      studentName: [
        '',
        [
          Validators.required,
          Validators.minLength(3)
        ]
      ],

      studentEmail: [
        '',
        [
          Validators.required,
          Validators.email
        ]
      ],

      courseId: [
        null,
        Validators.required
      ],

      preferredSemester: [
        'Odd',
        Validators.required
      ],

      agreeToTerms: [
        false,
        Validators.requiredTrue
      ]

    });

  }


  onSubmit() {

    console.log("Form Value:", this.enrollForm.value);

    // value excludes disabled controls
    // getRawValue() includes disabled controls

    console.log("Raw Value:", this.enrollForm.getRawValue());

  }

}