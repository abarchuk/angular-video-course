import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  isAuth = false;
  userName: string;
  loginUrl = '/login';

  constructor(private authService: AuthService,
              private router: Router,
              private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.isAuth = this.authService.isAuthenticated();
    this.authService.loginEvents.subscribe(() => {
      this.isAuth = true;
      this.authService.getUserInfo().then((user) => {
        this.userName = user;
        this.changeDetectorRef.markForCheck();
      });
    });
  }

  logOut() {
    this.authService.logout();
    this.userName = '';
    this.isAuth = false;
    this.router.navigate([this.loginUrl]);
  }

}
