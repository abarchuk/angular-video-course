import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../services/course.service';

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
              private courseService: CourseService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      const paramCourseId = params.get('id');
      if (paramCourseId) {
        this.courseId = Number(paramCourseId);
        const course = this.courseService.getById(this.courseId);
        this.addCourseForm = this.formBuilder.group({
          title: [course.title, Validators.required],
          description: [course.description, Validators.required],
          creationDate: [course.creationDate, Validators.required],
          duration: [course.duration, Validators.required],
          authors: ''
        });
      } else {
        this.addCourseForm = this.formBuilder.group({
          title: ['', Validators.required],
          description: ['', Validators.required],
          creationDate: ['', Validators.required],
          duration: ['', Validators.required],
          authors: ''
        });
      }
    });
  }

  addCourse() {
    this.addCourseFormSubmitted = true;
    if (this.addCourseForm.valid) {
      console.log('adding new course');
    }
  }

}
