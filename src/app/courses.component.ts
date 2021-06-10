import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

@Component({
  selector: `courses`,
  template: `
    <h1 [ngStyle]="getStyleObj()" [class]="withBorder ? 'with-border' : null">{{ getTitle() }}</h1>
    <ul>
      <li *ngFor="let course of getCourses()">{{ course }}</li>
    </ul>
  `,
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {
  private title = `List courses`;
  private courses;

  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }

  private styleObj = {
    color: `red`,
    background: `whitesmoke`
  };

  withBorder = true;

  getStyleObj() {
    return this.styleObj;
  }

  getTitle() {
    return this.title;
  }

  getCourses() {
    return this.courses;
  }
}
