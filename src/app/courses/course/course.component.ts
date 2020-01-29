import { Component, OnInit, Input } from '@angular/core';
import { CourseItem } from '../CourseItem';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  @Input() courseItem: CourseItem;

  constructor() { }

  ngOnInit() {
  }

}
