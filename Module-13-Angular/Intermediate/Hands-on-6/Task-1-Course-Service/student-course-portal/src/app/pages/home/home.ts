import { Component } from '@angular/core';
import { CourseService } from '../../services/course.service';


@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  courseCount: number = 0;


  constructor(private courseService: CourseService) {

    this.courseCount = this.courseService.getCourses().length;

  }

}