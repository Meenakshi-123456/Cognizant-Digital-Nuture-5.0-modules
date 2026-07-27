import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import {
  provideHttpClientTesting,
  HttpTestingController
} from '@angular/common/http/testing';

import { CourseService } from './course.service';
import { Course } from '../models/course';

describe('CourseService', () => {

  let service: CourseService;
  let httpMock: HttpTestingController;

  const mockCourses: Course[] = [
    {
      id: '1',
      name: 'Angular',
      duration: '3 months',
      fee: 25000,
      credits: 5
    },
    {
      id: '2',
      name: 'Java',
      duration: '4 months',
      fee: 30000,
      credits: 4
    }
  ];

  beforeEach(() => {

    TestBed.configureTestingModule({
      providers: [
        CourseService,
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });

    service = TestBed.inject(CourseService);
    httpMock = TestBed.inject(HttpTestingController);

  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch courses', () => {

    service.getCourses().subscribe((courses: Course[]) => {
      expect(courses.length).toBe(2);
      expect(courses).toEqual(mockCourses);
    });

    const req = httpMock.expectOne('http://localhost:3000/courses');

    expect(req.request.method).toBe('GET');

    req.flush(mockCourses);

  });

  it('should handle server error', () => {

    service.getCourses().subscribe({

      next: () => fail('Expected an error'),

      error: (error) => {
        expect(error.status).toBe(500);
        expect(error.statusText).toBe('Internal Server Error');
      }

    });

    const req = httpMock.expectOne('http://localhost:3000/courses');

    expect(req.request.method).toBe('GET');

    req.flush(
      'Server Error',
      {
        status: 500,
        statusText: 'Internal Server Error'
      }
    );

  });

});