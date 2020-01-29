import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainContentComponent } from './main-content/main-content.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { CoursesModule } from '../courses/courses.module';



@NgModule({
  declarations: [HeaderComponent, FooterComponent, MainContentComponent, BreadcrumbsComponent],
  imports: [
    CommonModule,
    CoursesModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    MainContentComponent
  ]
})
export class MainModule { }
