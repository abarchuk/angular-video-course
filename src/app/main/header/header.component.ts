import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [AuthService]
})
export class HeaderComponent implements OnInit {
  isAuth = false;
  userName: string;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.isAuth = this.authService.isAuthenticated();
    if (this.isAuth) {
      this.userName = this.authService.getUserInfo();
    }
  }

  logOut() {
    this.authService.logout();
  }

}
