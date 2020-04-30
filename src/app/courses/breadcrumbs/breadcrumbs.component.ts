import { Component, OnInit, ChangeDetectionStrategy, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import {filter} from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreadcrumbsComponent implements OnInit {
  menuItems = [];

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.menuItems = this.createBreadcrumbs(this.activatedRoute.root);
        this.changeDetectorRef.markForCheck();
      });
    this.menuItems = this.createBreadcrumbs(this.activatedRoute.root);
  }

  createBreadcrumbs(route: ActivatedRoute, url: string = '', breadcrumbs = []) {
    const children: ActivatedRoute[] = route.children;

    if (children.length === 0) {
      return breadcrumbs;
    }

    for (const child of children) {
      const routeUrl: string = child.snapshot.url.map(segment => segment.path).join('/');
      if (routeUrl !== '') {
        url += `/${routeUrl}`;
      }
      const label = child.snapshot.data.breadcrumb;
      if (label) {
        breadcrumbs.push({label, url});
      }
      return this.createBreadcrumbs(child, url, breadcrumbs);
    }
  }

}
