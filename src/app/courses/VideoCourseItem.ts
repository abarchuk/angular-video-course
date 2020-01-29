import { CourseItem } from './CourseItem';

export class VideoCourseItem implements CourseItem {
    id: number;
    title: string;
    duration: number;
    description: string;
    creationDate: Date;

    constructor(id: number, title: string, duration: number, description: string) {
        this.id = id;
        this.title = title;
        this.duration = duration;
        this.description = description;
        this.creationDate = new Date();
    }

    toString():string {
        return this.id + " - " + this.title + " - " + this.duration +
                " - " + this.description + " - " + this.creationDate;
    }

}

