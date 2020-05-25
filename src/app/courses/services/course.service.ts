import { Injectable } from '@angular/core';
import { CourseItem } from '../CourseItem';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class CourseService {
  host = 'http://localhost:3004';

  constructor(private httpClient: HttpClient) {}

  getList(start: number, size, term: string) {
    return this.httpClient.get<any[]>(`${this.host}/courses?start=${start}&count=${size}&textFragment=${term}`)
        .pipe(map(items => {
          return items.map((item) => {
            item.title = item['name'];
            item.creationDate = item['date'];
            item.duration = item['length'];
            return item;
          });
        }));
  }

  getById(id: number) {
    return this.httpClient.get<CourseItem>(`${this.host}/courses/${id}`)
        .pipe(map(item => {
          item.title = item['name'];
          item.creationDate = item['date'];
          item.duration = item['length'];
          return item;
        }));
  }

  create(item: CourseItem) {
    const data = {
      name: item.title,
      date: item.creationDate,
      description: item.description,
      isTopRated: item.topRated,
      length: item.duration
    }
    return this.httpClient.post(`${this.host}/courses`, data);
  }

  update(item: CourseItem) {
    const data = {
      id: item.id,
      name: item.title,
      date: item.creationDate,
      description: item.description,
      isTopRated: item.topRated,
      length: item.duration
    }
    return this.httpClient.patch(`${this.host}/courses`, data);
  }

  remove(item: CourseItem) {
    return this.httpClient.delete(`${this.host}/courses/${item.id}`);
  }

}
