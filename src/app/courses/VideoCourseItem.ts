import { CourseItem } from './CourseItem';

export class VideoCourseItem implements CourseItem {
    id: number;
    title: string;
    duration: number;
    description: string;
    creationDate: string;
    topRated: boolean;
}

