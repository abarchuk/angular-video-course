import { Component, OnInit } from '@angular/core';
import { CourseItem } from '../CourseItem';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {
  courseList: Array<CourseItem>;

  constructor() { }

  ngOnInit() {
    this.courseList = [
      {
        id: 1,
        title: 'Title 1',
        duration: 111111,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
        enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
        qui officia deserunt mollit anim id est laborum.`,
        creationDate: '2020-02-04T08:43:14.549Z'
      },
      {
        id: 2,
        title: 'Title 2',
        duration: 222222,
        description: 'Description 2',
        creationDate: '2020-02-04T08:43:14.549Z'
      },
      {
        id: 3,
        title: 'Title 3',
        duration: 333333,
        description: 'Description 3',
        creationDate: '2020-02-04T08:43:14.549Z'
      }
    ];
  }

  deleteVideo(courseId: number) {
    console.log(`delete clicked: ${courseId}`);
  }

}
