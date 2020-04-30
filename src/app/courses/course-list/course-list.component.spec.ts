import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseListComponent } from './course-list.component';
import { CourseSearchComponent } from '../course-search/course-search.component';
import { CourseComponent } from '../course/course.component';
import { CourseOrderPipe } from '../pipes/course-order.pipe';
import { FormsModule } from '@angular/forms';
import { DateHighlightDirective } from '../directives/date-highlight.directive';
import { CourseDurationPipe } from '../pipes/course-duration.pipe';
import { Router } from '@angular/router';

describe('CourseListComponent', () => {
  let component: CourseListComponent;
  let fixture: ComponentFixture<CourseListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseListComponent,
        CourseSearchComponent,
        CourseComponent,
        CourseOrderPipe,
        DateHighlightDirective,
        CourseDurationPipe ],
      imports: [ FormsModule ],
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
    fixture = TestBed.createComponent(CourseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
