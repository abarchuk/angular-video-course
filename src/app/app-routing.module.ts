import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './main/not-found/not-found.component';
import { LoginComponent } from './main/login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'courses',
    loadChildren: () => import('./courses/courses.module').then(m => m.CoursesModule)
  },
  { path: '', redirectTo: 'courses', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
