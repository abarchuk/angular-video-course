import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbsComponent } from './breadcrumbs.component';
import { Router } from '@angular/router';
import { CourseRoutingModule } from '../course-routing.module';
import { CoursesModule } from '../courses.module';
import { CourseContentComponent } from '../course-content/course-content.component';
import { CourseEditComponent } from '../course-edit/course-edit.component';
import { CourseListComponent } from '../course-list/course-list.component';
import { NotFoundComponent } from 'src/app/main/not-found/not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CourseDurationPipe } from '../pipes/course-duration.pipe';
import { CourseSearchComponent } from '../course-search/course-search.component';
import { CourseComponent } from '../course/course.component';
import { CourseOrderPipe } from '../pipes/course-order.pipe';
import { DateHighlightDirective } from '../directives/date-highlight.directive';

describe('BreadcrumbsComponent', () => {
  let component: BreadcrumbsComponent;
  let fixture: ComponentFixture<BreadcrumbsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        BreadcrumbsComponent,
        CourseContentComponent,
        CourseEditComponent,
        CourseListComponent,
        NotFoundComponent,
        CourseDurationPipe,
        CourseSearchComponent,
        CourseComponent,
        CourseOrderPipe,
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
    fixture = TestBed.createComponent(BreadcrumbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
