import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { CourseService } from '../../services/course.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-course-list',
  imports: [NgFor, FormsModule],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseList {

  courses:any[] = [];

  searchTerm = '';

  constructor(
    private courseService: CourseService,
    private router: Router,
    private route: ActivatedRoute
  ) {}


  ngOnInit(){

    this.courses = this.courseService.getCourses();


    this.searchTerm =
      this.route.snapshot.queryParamMap.get('search') || '';

  }


  openCourse(id:number){

    this.router.navigate(
      ['courses', id]
    );

  }


  searchCourses(){

    this.router.navigate(
      ['courses'],
      {
        queryParams:{
          search:this.searchTerm
        }
      }
    );

  }

}