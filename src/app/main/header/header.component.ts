import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
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
              private router: Router) { }

  ngOnInit() {
    this.isAuth = this.authService.isAuthenticated();
    if (this.isAuth) {
      this.userName = this.authService.getUserInfo();
    }
  }

  logOut() {
    this.authService.logout();
    this.router.navigate([this.loginUrl]);
  }

}
