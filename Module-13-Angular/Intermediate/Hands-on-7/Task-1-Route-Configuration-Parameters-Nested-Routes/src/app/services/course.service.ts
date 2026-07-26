import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  courses = [
    {
      id: 1,
      name: 'Angular Basics',
      description: 'Learn Angular fundamentals'
    },
    {
      id: 2,
      name: 'Angular Routing',
      description: 'Learn Angular Router and navigation'
    },
    {
      id: 3,
      name: 'Angular Forms',
      description: 'Learn Template and Reactive Forms'
    }
  ];


  getCourses() {
    return this.courses;
  }


  getCourseById(id: number) {

    return this.courses.find(
      course => course.id === id
    );

  }

}