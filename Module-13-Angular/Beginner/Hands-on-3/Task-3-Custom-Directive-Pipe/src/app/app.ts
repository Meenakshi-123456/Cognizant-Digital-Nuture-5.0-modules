import { Component } from '@angular/core';
import { CourseCard } from './course-card/course-card';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CourseCard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}