import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-course-search',
  templateUrl: './course-search.component.html',
  styleUrls: ['./course-search.component.scss']
})
export class CourseSearchComponent implements OnInit {
  @Input() searchTerm = '';

  constructor() { }

  ngOnInit() {
  }

  searchTermChange(event: any) {
    this.searchTerm = event.target.value;
  }

  onSearchClick() {
    console.log('Searching: ' + this.searchTerm);
  }

}
