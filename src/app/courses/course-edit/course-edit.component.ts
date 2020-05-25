import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../services/course.service';
import { CourseItem } from '../CourseItem';
import { VideoCourseItem } from '../VideoCourseItem';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-course-edit',
  templateUrl: './course-edit.component.html',
  styleUrls: ['./course-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [CourseService]
})
export class CourseEditComponent implements OnInit {
  addCourseForm: FormGroup;
  addCourseFormSubmitted = false;
  courseId: number;

  constructor(private formBuilder: FormBuilder,
              private activatedRoute: ActivatedRoute,
              private courseService: CourseService,
              private changeDetectorRef: ChangeDetectorRef,
              private notifierService: NotifierService) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      const paramCourseId = params.get('id');
      if (paramCourseId) {
        this.courseId = Number(paramCourseId);
        this.courseService.getById(this.courseId).subscribe((data) => {
          this.initForm(data);
        })
      } else {
        this.initForm(new VideoCourseItem());
      }
    });
  }

  initForm(course: CourseItem) {
    this.addCourseForm = this.formBuilder.group({
      title: [course.title, Validators.required],
      description: [course.description, Validators.required],
      creationDate: [course.creationDate, Validators.required],
      duration: [course.duration, Validators.required],
      authors: ''
    });
    this.changeDetectorRef.markForCheck();
  }

  addCourse() {
    this.addCourseFormSubmitted = true;
    if (this.addCourseForm.valid) {
      const course = new VideoCourseItem();
      course.title = this.addCourseForm.controls.title.value;
      course.description = this.addCourseForm.controls.description.value;
      course.creationDate = this.addCourseForm.controls.creationDate.value;
      course.duration = this.addCourseForm.controls.duration.value;
      if (this.courseId) {
        course.id = this.courseId;
        this.courseService.update(course).toPromise().then(() => {
          this.notifierService.notify('success', 'Course successfully updated');
        });
      } else {
        this.courseService.create(course).toPromise().then(() => {
          this.notifierService.notify('success', 'Course successfully created');
        });
      }
    }
  }

}
