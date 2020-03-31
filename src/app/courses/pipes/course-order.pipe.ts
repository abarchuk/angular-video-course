import { Pipe, PipeTransform } from '@angular/core';
import { CourseItem } from '../CourseItem';

@Pipe({
  name: 'courseOrder'
})
export class CourseOrderPipe implements PipeTransform {
  transform(courseList: Array<CourseItem>): Array<CourseItem> {
    return courseList.sort((first: CourseItem, second: CourseItem) => {
      const firstDate = new Date(first.creationDate).getTime();
      const secondDate = new Date(second.creationDate).getTime();
      if (firstDate > secondDate) {
        return -1;
      } else if (firstDate < secondDate) {
        return 1;
      }
      return 0;
    });
  }

}
