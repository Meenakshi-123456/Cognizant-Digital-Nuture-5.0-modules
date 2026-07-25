import { Component } from '@angular/core';
import { Highlight } from '../directives/highlight';
import { CreditLabelPipe } from '../pipes/credit-label-pipe';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [Highlight, CreditLabelPipe],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css'
})
export class CourseCard {

  course = {
    name: 'Angular Basics',
    credits: null
  };

}