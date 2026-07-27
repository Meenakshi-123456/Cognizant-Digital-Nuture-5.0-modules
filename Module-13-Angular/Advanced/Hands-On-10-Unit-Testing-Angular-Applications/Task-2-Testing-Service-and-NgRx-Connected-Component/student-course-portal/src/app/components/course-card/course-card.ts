import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { CommonModule } from '@angular/common';

import { Course } from '../../models/course';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css'
})
export class CourseCardComponent implements OnChanges {

  @Input()
  course!: Course;

  @Output()
  enrollRequested = new EventEmitter<string>();

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Course changed', changes);
  }

  enroll(): void {
    this.enrollRequested.emit(this.course.id);
  }

}