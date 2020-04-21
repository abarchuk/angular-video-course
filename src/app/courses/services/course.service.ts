import { Injectable } from '@angular/core';
import { CourseItem } from '../CourseItem';

@Injectable()
export class CourseService {

    private courseList = [
      {
        id: 1,
        title: 'Title 1',
        duration: 111,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
        enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
        qui officia deserunt mollit anim id est laborum.`,
        creationDate: '2020-04-19T08:43:14.549Z',
        topRated: false
      },
      {
        id: 2,
        title: 'Title 2',
        duration: 222,
        description: 'Description 2',
        creationDate: '2020-02-04T08:43:14.549Z',
        topRated: false
      },
      {
        id: 3,
        title: 'Title 3',
        duration: 33,
        description: 'Description 3',
        creationDate: '2020-03-30T08:43:14.549Z',
        topRated: true
      }
    ];

    getList(): Array<CourseItem> {
        return this.courseList;
    }

    getById(id: number): CourseItem {
        return this.courseList.find(i => i.id === id);
    }

    create(item: CourseItem): boolean {
        this.courseList.push(item);
        return true;
    }

    update(item: CourseItem): boolean {
        const itemNum = this.courseList.findIndex(i => i.id === item.id);
        if (itemNum > -1) {
            this.courseList[itemNum] = item;
            return true;
        }
        return false;
    }

    remove(item: CourseItem): boolean {
        const itemNum = this.courseList.findIndex(i => i.id === item.id);
        if (itemNum > -1) {
            this.courseList.splice(itemNum, 1);
            return true;
        }
        return false;
    }

}
