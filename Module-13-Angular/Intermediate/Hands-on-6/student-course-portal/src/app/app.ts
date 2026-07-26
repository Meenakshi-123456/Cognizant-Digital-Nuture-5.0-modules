import { Component, signal } from '@angular/core';
import { CourseList } from './pages/course-list/course-list';
import { Home } from './pages/home/home';
import { CourseSummaryWidget } from './components/course-summary-widget/course-summary-widget';

@Component({
  selector: 'app-root',
 imports: [
  Home,
  CourseList,
  CourseSummaryWidget
],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  protected readonly title = signal('student-course-portal');

}