import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-course-add',
  templateUrl: './course-add.component.html',
  styleUrls: ['./course-add.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseAddComponent implements OnInit {
  addCourseForm: FormGroup;
  addCourseFormSubmitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.addCourseForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      creationDate: ['', Validators.required],
      duration: ['', Validators.required],
      authors: ''
    });
  }

  addCourse() {
    this.addCourseFormSubmitted = true;
    if (this.addCourseForm.valid) {
      console.log('adding new course');
    }
  }

}
