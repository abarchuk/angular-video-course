import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-course-search',
  templateUrl: './course-search.component.html',
  styleUrls: ['./course-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseSearchComponent implements OnInit {
  @Input() searchTerm = '';
  @Output() doSearch = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  searchTermChange(event: any) {
    this.searchTerm = event.target.value;
  }

  onSearchClick() {
    this.doSearch.emit(this.searchTerm);
  }

}
