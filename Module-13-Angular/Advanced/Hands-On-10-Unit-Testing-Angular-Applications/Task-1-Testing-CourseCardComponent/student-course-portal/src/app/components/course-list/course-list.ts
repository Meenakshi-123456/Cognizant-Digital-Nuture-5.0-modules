import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable, take } from 'rxjs';

import { Course } from '../../models/course';

import {
  loadCourses
} from '../../store/course/course.actions';

import {
  selectAllCourses
} from '../../store/course/course.selectors';


import {
  enrollInCourse,
  unenrollFromCourse
} from '../../store/enrollment/enrollment.actions';


import {
  selectEnrolledCourses
} from '../../store/enrollment/enrollment.selectors';



@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseListComponent implements OnInit {


  courses$!: Observable<Course[]>;


  enrolledIds$!: Observable<string[]>;



  constructor(
    private store: Store
  ){}



  ngOnInit(): void {


    this.courses$ =
      this.store.select(selectAllCourses);



    this.enrolledIds$ =
      this.store.select(selectEnrolledCourses);



    this.store.dispatch(
      loadCourses()
    );


  }




  toggleEnrollment(courseId: string){


    console.log(
      "Enroll clicked:",
      courseId
    );


    this.enrolledIds$
    .pipe(take(1))
    .subscribe(ids=>{


      if(ids.includes(courseId)){


        console.log(
          "Dispatching Unenroll"
        );


        this.store.dispatch(

          unenrollFromCourse({

            courseId

          })

        );


      }
      else{


        console.log(
          "Dispatching Enroll"
        );


        this.store.dispatch(

          enrollInCourse({

            courseId

          })

        );


      }


    });


  }


}