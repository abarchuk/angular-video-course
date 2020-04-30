import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseContentComponent } from './course-content.component';
import { BreadcrumbsComponent } from '../breadcrumbs/breadcrumbs.component';
import { Router } from '@angular/router';
import { CourseRoutingModule } from '../course-routing.module';
import { CourseListComponent } from '../course-list/course-list.component';
import { CourseEditComponent } from '../course-edit/course-edit.component';
import { NotFoundComponent } from 'src/app/main/not-found/not-found.component';
import { CourseSearchComponent } from '../course-search/course-search.component';
import { CourseOrderPipe } from '../pipes/course-order.pipe';
import { CourseComponent } from '../course/course.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CourseDurationPipe } from '../pipes/course-duration.pipe';
import { DateHighlightDirective } from '../directives/date-highlight.directive';

describe('CourseContentComponent', () => {
  let component: CourseContentComponent;
  let fixture: ComponentFixture<CourseContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CourseContentComponent,
        BreadcrumbsComponent,
        CourseListComponent,
        CourseEditComponent,
        CourseSearchComponent,
        CourseOrderPipe,
        CourseComponent,
        CourseDurationPipe,
        NotFoundComponent,
        DateHighlightDirective
      ],
      imports: [
        CourseRoutingModule,
        ReactiveFormsModule,
        FormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
