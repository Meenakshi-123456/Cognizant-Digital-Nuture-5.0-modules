import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

import { CourseListComponent } from './course-list';

describe('CourseListComponent', () => {

  let component: CourseListComponent;
  let fixture: ComponentFixture<CourseListComponent>;
  let store: MockStore;

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
              loading: false,
              error: null,
              enrolledIds: []
            },
            enrollment: {
              enrolledCourseIds: []
            }
          }
        })
      ]
    }).compileComponents();

    store = TestBed.inject(MockStore);

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

  it('should show loading state', () => {

    store.setState({
      course: {
        courses: [],
        loading: true,
        error: null,
        enrolledIds: []
      },
      enrollment: {
        enrolledCourseIds: []
      }
    });

    fixture.detectChanges();

    const compiled = fixture.nativeElement;

    expect(compiled.textContent).toContain('Loading');

  });

});