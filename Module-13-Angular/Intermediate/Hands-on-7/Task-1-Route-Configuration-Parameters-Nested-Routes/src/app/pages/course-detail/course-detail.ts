import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../../services/course.service';


@Component({
  selector: 'app-course-detail',
  imports: [],
  templateUrl: './course-detail.html',
  styleUrl: './course-detail.css'
})
export class CourseDetail {


  course:any;


  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService
  ){}


  ngOnInit(){

    const id = Number(
      this.route.snapshot.paramMap.get('id')
    );


    this.course =
      this.courseService.getCourseById(id);

  }


}