import { Component } from '@angular/core';
import { AsyncPipe, NgIf } from '@angular/common';

import { CourseListComponent } from './components/course-list/course-list';
import { AddCourseComponent } from './components/add-course/add-course';
import { LoadingService } from './services/loading.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
   CourseListComponent,
    AddCourseComponent,
    NgIf,
    AsyncPipe
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  constructor(public loadingService: LoadingService) {}

}