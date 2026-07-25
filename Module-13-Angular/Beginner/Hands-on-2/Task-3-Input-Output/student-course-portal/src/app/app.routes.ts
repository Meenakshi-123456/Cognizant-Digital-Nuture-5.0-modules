import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { CourseListComponent } from './pages/course-list/course-list';

export const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'course-list',
    component: CourseListComponent
  }
];