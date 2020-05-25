import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainModule } from './main/main.module';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NotifierModule, NotifierOptions } from 'angular-notifier';


const notifierOptions: NotifierOptions = {
  position: {
		horizontal: {
			position: 'middle'
		},
		vertical: {
			position: 'top'
		}
	}
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MainModule,
    AppRoutingModule,
    NgbModule,
    NotifierModule.withConfig(notifierOptions)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
