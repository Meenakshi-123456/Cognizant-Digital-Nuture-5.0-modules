import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css'
})
export class CourseCard {

  course = {
    name: 'Angular',
    enrolled: true,
    credits: 4,
    gradeStatus: 'passed'
  };

  isExpanded = false;

  get cardClasses() {
    return {
      'card--enrolled': this.course.enrolled,
      'card--full': this.course.credits >= 4,
      'expanded': this.isExpanded
    };
  }

  toggleDetails() {
    this.isExpanded = !this.isExpanded;
  }

}
