import { Injectable } from '@angular/core';
import { CourseUser } from '../CourseUser';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private loginEventsSubject = new Subject();

    constructor(private httpClient: HttpClient) {}

    get loginEvents(): Observable<any> {
        return this.loginEventsSubject.asObservable();
    }

    login(username: string, password: string): Promise<string> {
      return new Promise((resolve) => {
        const login = {login: username, password: password};
        this.httpClient.post('http://localhost:3004/auth/login', login).subscribe((data) => {
            const user = {token: data['token']};
            localStorage.setItem('course_user', JSON.stringify(user));
            this.loginEventsSubject.next();
            resolve("login successful");
        });
      });
    }

    logout() {
        localStorage.removeItem('course_user');
        console.log('Logged out');
    }

    isAuthenticated(): boolean {
        return this.getToken() ? true: false;
    }

    getUserInfo(): Promise<string> {
      return new Promise((resolve) => {
        if (this.isAuthenticated()) {
            const token = {token: this.getToken()};
            this.httpClient.post('http://localhost:3004/auth/userinfo', token).subscribe((data) => {
                console.log(data);
                resolve(`${data['name'].first} ${data['name'].last}`);
            });
        } else {
            resolve('');
        }
      });
    }

    getToken() {
        const courseUser = localStorage.getItem('course_user');
        if (courseUser) {
            const token = JSON.parse(courseUser).token;
            if (token) {
                return token;
            }
        }
        return '';
    }

}
