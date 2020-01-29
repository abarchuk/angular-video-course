import { Component, OnInit } from '@angular/core';
import { VideoCourseItem } from '../VideoCourseItem';
import { CourseItem } from '../CourseItem';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {
  courseList: Array<CourseItem> = [
    new VideoCourseItem(1, 'Title 1', 11, 'Description 1'),
    new VideoCourseItem(2, 'Title 2', 22, 'Description 2'),
    new VideoCourseItem(3, 'Title 3', 33, 'Description 3')
  ];

  constructor() { }

  ngOnInit() {
  }

}
