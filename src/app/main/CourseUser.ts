import { User } from './User';

export class CourseUser implements User {
    id: number;
    firstName: string;
    lastName: string;
    userName: string;
    token: string;

    constructor(id: number, firstName: string, lastName: string, userName: string, token: string) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.userName = userName;
        this.token = token;
    }

}

