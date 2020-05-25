import { Component, OnInit, TemplateRef, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { CourseItem } from '../CourseItem';
import { CourseService } from '../services/course.service';
import {NgbModal, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [CourseService]
})
export class CourseListComponent implements OnInit {
  @ViewChild('deleteModal', {static: false}) deleteModal: TemplateRef<any>;
  courseList = [];
  modalOptions: NgbModalOptions;
  startPos: number
  pageSize = 3;
  searchTerm = '';
  searchReset = false;

  constructor(private courseService: CourseService,
              private modalService: NgbModal,
              private router: Router,
              private changeDetectorRef: ChangeDetectorRef,
              private notifierService: NotifierService) {
      this.modalOptions = {
        centered: true
      };
    }

  ngOnInit() {
    this.fetchCourses();
  }

  private fetchCourses(start: number = 0, size: number = this.pageSize) {
    this.courseService.getList(start, size, this.searchTerm).subscribe((data) => {
      console.log(start, size, data);
      if (!data) {
        console.log('no more data');
      }
      if (this.searchReset) {
        this.courseList = Object.assign([], data);
        this.searchReset = false;
      } else {
        data.forEach(d => this.courseList.push(d));
      }
      this.startPos = start + size;
      this.changeDetectorRef.detectChanges();
    });
  }

  deleteVideo(item: CourseItem) {
    this.modalService.open(this.deleteModal, this.modalOptions).result.then((result) => {
      if (result === 'delete') {
        this.courseService.remove(item).toPromise().then(() => {
          this.notifierService.notify('success', 'Course successfully deleted');
          this.fetchCourses();
        });
      }
    });
  }

  searchByName(name: string) {
    if (this.searchTerm !== name) {
      this.searchReset = true;
      this.startPos = 0;
    }
    this.searchTerm = name;
    this.fetchCourses();
  }

  addCourse() {
    this.router.navigate(['courses', 'new']);
  }

  loadMoreCourses() {
    this.fetchCourses(this.startPos);
  }

}
