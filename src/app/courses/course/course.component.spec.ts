import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseComponent } from './course.component';
import { DateHighlightDirective } from '../directives/date-highlight.directive';
import { CourseDurationPipe } from '../pipes/course-duration.pipe';
import { VideoCourseItem } from '../VideoCourseItem';
import { Router } from '@angular/router';

describe('CourseComponent', () => {
  let component: CourseComponent;
  let fixture: ComponentFixture<CourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CourseComponent,
        DateHighlightDirective,
        CourseDurationPipe
      ],
      providers: [
        {
          provide: Router,
          useClass: class { navigate = jasmine.createSpy('navigate'); }
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseComponent);
    component = fixture.componentInstance;
    component.courseItem = new VideoCourseItem();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
