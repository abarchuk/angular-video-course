import { Injectable } from '@angular/core';
import { CourseUser } from '../CourseUser';

@Injectable()
export class AuthService {
    login(username: string, password: string) {
        const user = new CourseUser(1, 'John', 'Doe', username);
        localStorage.setItem('course_user', JSON.stringify(user));
        console.log('Logged in');
    }

    logout() {
        localStorage.removeItem('course_user');
        console.log('Logged out');
    }

    isAuthenticated(): boolean {
        const courseUser = localStorage.getItem('course_user');
        if (courseUser && JSON.parse(courseUser).userName) {
            return true;
        }
        return false;
    }

    getUserInfo(): string {
        const user = JSON.parse(localStorage.getItem('course_user'));
        return user.userName;
    }
}
