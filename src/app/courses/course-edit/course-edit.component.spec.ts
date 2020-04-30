import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseEditComponent } from './course-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CourseDurationPipe } from '../pipes/course-duration.pipe';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('CourseEditComponent', () => {
  let component: CourseEditComponent;
  let fixture: ComponentFixture<CourseEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CourseEditComponent,
        CourseDurationPipe
      ],
      imports: [ ReactiveFormsModule ],
      providers: [
          {
            provide: ActivatedRoute,
            useClass: class { paramMap = of({get: (param) => 1}); }
          }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
