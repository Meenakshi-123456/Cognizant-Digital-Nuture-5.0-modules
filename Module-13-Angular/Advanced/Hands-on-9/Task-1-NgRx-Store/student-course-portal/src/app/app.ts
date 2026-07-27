import { Component } from '@angular/core';
import { AsyncPipe, NgIf } from '@angular/common';

import { CourseList } from './components/course-list/course-list';
import { AddCourse } from './components/add-course/add-course';
import { LoadingService } from './services/loading.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CourseList,
    AddCourse,
    NgIf,
    AsyncPipe
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  constructor(public loadingService: LoadingService) {}

}