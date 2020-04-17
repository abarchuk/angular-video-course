import { Component, OnInit } from '@angular/core';
import { CourseItem } from '../CourseItem';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {
  filteredCourseList: Array<CourseItem>;
  courseList: Array<CourseItem>;

  constructor() { }

  ngOnInit() {
    this.courseList = [
      {
        id: 1,
        title: 'Title 1',
        duration: 111,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
        enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
        qui officia deserunt mollit anim id est laborum.`,
        creationDate: '2020-04-19T08:43:14.549Z',
        topRated: false
      },
      {
        id: 2,
        title: 'Title 2',
        duration: 222,
        description: 'Description 2',
        creationDate: '2020-02-04T08:43:14.549Z',
        topRated: false
      },
      {
        id: 3,
        title: 'Title 3',
        duration: 33,
        description: 'Description 3',
        creationDate: '2020-03-30T08:43:14.549Z',
        topRated: true
      }
    ];
    this.resetCourseFilter();
  }

  deleteVideo(courseId: number) {
    console.log(`delete clicked: ${courseId}`);
  }

  resetCourseFilter() {
    this.filteredCourseList = Object.assign([], this.courseList);
  }

  searchByName(name: string) {
    if (name) {
      this.filteredCourseList = this.courseList.filter(course => {
        return course.title.toLowerCase().indexOf(name.toLowerCase()) >= 0;
      });
    } else {
      this.resetCourseFilter();
    }
  }

}
