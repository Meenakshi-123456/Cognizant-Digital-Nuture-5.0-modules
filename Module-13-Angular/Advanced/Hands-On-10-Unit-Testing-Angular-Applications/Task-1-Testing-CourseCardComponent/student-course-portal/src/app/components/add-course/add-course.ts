import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { CourseService } from '../../services/course.service';

import { Course } from '../../models/course';



@Component({

  selector:'app-add-course',

  standalone:true,

  imports:[
    CommonModule,
    FormsModule
  ],

  templateUrl:'./add-course.html',

  styleUrl:'./add-course.css'

})


export class AddCourseComponent {



course: Course = {
  id: crypto.randomUUID(),
  name: '',
  duration: '',
  fee: 0,
  credits: 0
};



constructor(
  private courseService:CourseService
){}




addCourse(){


 this.courseService
 .addCourse(this.course)
 .subscribe(()=>{


   alert("Course Added");


   this.course = {
  id: crypto.randomUUID(),
  name: '',
  duration: '',
  fee: 0,
  credits: 0
};


 });



}



}