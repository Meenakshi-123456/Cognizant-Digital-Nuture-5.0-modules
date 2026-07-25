import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCard } from '../../components/course-card/course-card';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, CourseCard],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseList {

  courses = [
    {
      name: 'Angular',
      duration: '3 Months'
    },
    {
      name: 'Java Spring Boot',
      duration: '4 Months'
    },
    {
      name: 'Python Machine Learning',
      duration: '5 Months'
    }
  ];

}