import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { CourseListComponent } from './course-list';

describe('CourseListComponent', () => {

  let component: CourseListComponent;
  let fixture: ComponentFixture<CourseListComponent>;

  const mockCourses = [
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

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseListComponent],
      providers: [
        provideMockStore({
          initialState: {
            course: {
              courses: mockCourses,
              enrolledIds: []
            },
            enrollment: {
              enrolledCourseIds: []
            }
          }
        })
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CourseListComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display courses from the store', () => {

    const compiled = fixture.nativeElement;

    expect(compiled.textContent).toContain('Angular');
    expect(compiled.textContent).toContain('Java');

  });

});