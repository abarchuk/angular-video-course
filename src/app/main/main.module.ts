import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CoursesModule } from '../courses/courses.module';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NotFoundComponent } from './not-found/not-found.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    CoursesModule,
    ReactiveFormsModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class MainModule { }
