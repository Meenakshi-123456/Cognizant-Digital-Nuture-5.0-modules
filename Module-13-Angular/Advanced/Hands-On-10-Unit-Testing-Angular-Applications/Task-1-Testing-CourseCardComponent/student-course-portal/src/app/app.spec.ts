import { TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

import { App } from './app';

describe('App', () => {

  beforeEach(async () => {

    await TestBed.configureTestingModule({

      imports: [App],

      providers: [

        provideMockStore({
          initialState: {
            course: {
              courses: [],
              loading: false,
              error: null
            },
            enrollment: {
              enrolledCourseIds: []
            }
          }
        }),

        provideHttpClient(),
        provideHttpClientTesting()

      ]

    }).compileComponents();

  });

  it('should create the app', () => {

    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;

    expect(app).toBeTruthy();

  });

  it('should render title', () => {

    const fixture = TestBed.createComponent(App);

    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.textContent).toContain('Student Course Portal');

  });

});