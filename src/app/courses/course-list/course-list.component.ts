import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { CourseItem } from '../CourseItem';
import { CourseService } from '../services/course.service';
import {NgbModal, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss'],
  providers: [CourseService]
})
export class CourseListComponent implements OnInit {
  @ViewChild('deleteModal', {static: false}) deleteModal: TemplateRef<any>;
  filteredCourseList: Array<CourseItem>;
  courseList: Array<CourseItem>;
  modalOptions: NgbModalOptions;

  constructor(private courseService: CourseService,
              private modalService: NgbModal) {
      this.modalOptions = {
        centered: true
      };
    }

  ngOnInit() {
    this.courseList = this.courseService.getList();
    this.resetCourseFilter();
  }

  deleteVideo(item: CourseItem) {
    this.modalService.open(this.deleteModal, this.modalOptions).result.then((result) => {
      if (result === 'delete') {
        this.courseService.remove(item);
        this.courseList = this.courseService.getList();
        this.resetCourseFilter();
      }
    });
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
