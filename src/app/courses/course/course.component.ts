import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { CourseItem } from '../CourseItem';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseComponent {
  @Input() courseItem: CourseItem;
  @Output() deleteCourse: EventEmitter<CourseItem> = new EventEmitter();

  constructor(private router: Router) { }

  deleteClick() {
      this.deleteCourse.emit(this.courseItem);
  }

  editClick() {
      this.router.navigate(['courses', this.courseItem.id]);
  }

}
