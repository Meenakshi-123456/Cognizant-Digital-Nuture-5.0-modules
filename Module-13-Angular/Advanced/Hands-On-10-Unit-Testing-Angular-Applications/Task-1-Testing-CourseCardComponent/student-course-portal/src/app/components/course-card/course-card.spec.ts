import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SimpleChange } from '@angular/core';

import { CourseCardComponent } from './course-card';

describe('CourseCardComponent', () => {

  let component: CourseCardComponent;
  let fixture: ComponentFixture<CourseCardComponent>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({

      imports: [CourseCardComponent]

    }).compileComponents();

    fixture = TestBed.createComponent(CourseCardComponent);
    component = fixture.componentInstance;

  });

  it('should create', () => {

    expect(component).toBeTruthy();

  });

  it('should render course name from @Input', () => {

    component.course = {
      id: '1',
      name: 'Data Structures',
      duration: '4 Months',
      fee: 25000,
      credits: 4
    };

    fixture.detectChanges();

    const heading =
      fixture.debugElement.query(By.css('h3')).nativeElement;

    expect(heading.textContent).toContain('Data Structures');

  });

  it('should emit course id on button click', () => {

    component.course = {
      id: '1',
      name: 'Angular',
      duration: '3 Months',
      fee: 20000,
      credits: 5
    };

    fixture.detectChanges();

    spyOn(component.enrollRequested, 'emit');

    fixture.debugElement
      .query(By.css('button'))
      .nativeElement
      .click();

    expect(component.enrollRequested.emit)
      .toHaveBeenCalledWith('1');

  });

  it('should call ngOnChanges', () => {

    spyOn(console, 'log');

    component.course = {
      id: '1',
      name: 'Java',
      duration: '4 Months',
      fee: 30000,
      credits: 4
    };

    component.ngOnChanges({
      course: new SimpleChange(
        null,
        component.course,
        true
      )
    });

    expect(console.log).toHaveBeenCalled();

  });

  it('should display fee correctly', () => {

    component.course = {
      id: '1',
      name: 'Python',
      duration: '2 Months',
      fee: 15000,
      credits: 3
    };

    fixture.detectChanges();

    const text = fixture.nativeElement.textContent;

    expect(text).toContain('15000');

  });

});