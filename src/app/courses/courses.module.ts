import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CourseComponent } from './course/course.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseSearchComponent } from './course-search/course-search.component';
import { DateHighlightDirective } from './directives/date-highlight.directive';
import { CourseDurationPipe } from './pipes/course-duration.pipe';
import { CourseOrderPipe } from './pipes/course-order.pipe';
import { CourseEditComponent } from './course-edit/course-edit.component';
import { CourseRoutingModule } from './course-routing.module';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { CourseContentComponent } from './course-content/course-content.component';



@NgModule({
  declarations: [
    CourseComponent,
    CourseListComponent,
    CourseSearchComponent,
    DateHighlightDirective,
    CourseDurationPipe,
    CourseOrderPipe,
    CourseEditComponent,
    BreadcrumbsComponent,
    CourseContentComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CourseRoutingModule
  ]
})
export class CoursesModule { }
