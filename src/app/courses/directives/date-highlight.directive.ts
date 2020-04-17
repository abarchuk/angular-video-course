import { Directive, Input, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appDateHighlight]'
})
export class DateHighlightDirective implements OnInit {
  freshCourseBorder = '3px solid lawngreen';
  upcomingCourseBorder = '3px solid lightblue';
  defaultCourseBorder = 'none';

  @Input() appDateHighlight: string;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    const createdDate = new Date(this.appDateHighlight);
    const now = new Date();
    if (createdDate.getTime() > now.getTime()) {
      this.el.nativeElement.style.border = this.upcomingCourseBorder;
    } else {
      now.setDate(now.getDate() - 14);
      if (createdDate.getTime() > now.getTime()) {
        this.el.nativeElement.style.border = this.freshCourseBorder;
      } else {
        this.el.nativeElement.style.border = this.defaultCourseBorder;
      }
    }
  }
}
