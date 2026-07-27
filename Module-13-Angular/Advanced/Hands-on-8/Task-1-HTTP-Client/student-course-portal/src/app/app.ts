import { Component } from '@angular/core';
import { CourseList } from './components/course-list/course-list';
import { AddCourse } from './components/add-course/add-course';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CourseList, AddCourse],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}