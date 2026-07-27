import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CourseService } from '../../services/course';

@Component({
  selector: 'app-add-course',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-course.html',
  styleUrl: './add-course.css'
})
export class AddCourse {

  course = {
    name: '',
    duration: '',
    fee: 0
  };

  constructor(private courseService: CourseService) {}

  addCourse() {
    this.courseService.addCourse(this.course)
      .subscribe(response => {
        console.log('Course added:', response);
        alert('Course added successfully');
      });
  }
}