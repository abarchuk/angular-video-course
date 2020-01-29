import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseComponent } from './course/course.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseSearchComponent } from './course-search/course-search.component';



@NgModule({
  declarations: [CourseComponent, CourseListComponent, CourseSearchComponent],
  imports: [
    CommonModule
  ],
  exports: [
    CourseListComponent
  ]
})
export class CoursesModule { }
