import { Component, OnInit } from '@angular/core';
import { CourseItem } from '../CourseItem';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {
  courseList: Array<CourseItem> = [
    {
      id: 1,
      title: 'Title 1',
      duration: 11,
      description: 'Description 1',
      creationDate: '2020-02-04T08:43:14.549Z'
    },
    {
      id: 2,
      title: 'Title 2',
      duration: 22,
      description: 'Description 2',
      creationDate: '2020-02-04T08:43:14.549Z'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
