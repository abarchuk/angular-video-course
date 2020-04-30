import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '../main/not-found/not-found.component';
import { CourseEditComponent } from './course-edit/course-edit.component';
import { CourseListComponent } from './course-list/course-list.component';
import { AuthGuard } from '../main/services/auth.guard';
import { CourseContentComponent } from './course-content/course-content.component';

const routes: Routes = [
  {
    path: 'courses',
    component: CourseContentComponent,
    data: {breadcrumb: 'Courses'},
    canActivateChild: [ AuthGuard ],
    children: [
      { path: 'new', data: {breadcrumb: 'New'}, component: CourseEditComponent },
      { path: ':id', data: {breadcrumb: 'Edit'}, component: CourseEditComponent },
      { path: '', data: {breadcrumb: ''}, component: CourseListComponent},
      { path: '**', component: NotFoundComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CourseRoutingModule { }
