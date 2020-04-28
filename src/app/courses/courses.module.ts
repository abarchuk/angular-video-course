import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CourseComponent } from './course/course.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseSearchComponent } from './course-search/course-search.component';
import { DateHighlightDirective } from './directives/date-highlight.directive';
import { CourseDurationPipe } from './pipes/course-duration.pipe';
import { CourseOrderPipe } from './pipes/course-order.pipe';
import { CourseAddComponent } from './course-add/course-add.component';



@NgModule({
  declarations: [
    CourseComponent,
    CourseListComponent,
    CourseSearchComponent,
    DateHighlightDirective,
    CourseDurationPipe,
    CourseOrderPipe,
    CourseAddComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    CourseListComponent
  ]
})
export class CoursesModule { }
