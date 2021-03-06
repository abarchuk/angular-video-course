import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { CourseItem } from '../CourseItem';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit, OnChanges {
  @Input() courseItem: CourseItem;
  @Output() deleteCourse: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    console.log(`course init: ${this.courseItem.title}`);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  deleteClick() {
      this.deleteCourse.emit(this.courseItem.id);
  }

  editClick() {
      console.log('edit clicked');
  }

}
