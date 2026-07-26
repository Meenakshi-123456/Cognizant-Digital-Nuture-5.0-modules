import { Component, signal } from '@angular/core';
import { CourseList } from './pages/course-list/course-list';
import { Home } from './pages/home/home';
import { CourseSummaryWidget } from './components/course-summary-widget/course-summary-widget';
import { StudentProfile } from './pages/student-profile/student-profile';
import { NotificationComponent } from './components/notification/notification';
@Component({
  selector: 'app-root',
 imports: [
  Home,
  CourseList,
  CourseSummaryWidget,
  StudentProfile,
  NotificationComponent
],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  protected readonly title = signal('student-course-portal');

}