import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

@Component({
  selector: `courses`,
  template: `
    <h1>{{getTitle()}}</h1>
    <ul>
      <li *ngFor="let course of getCourses()">{{ course }}</li>
    </ul>
  `
})
export class CoursesComponent {
  private title = `List courses`;
  private courses;

  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }

  getTitle() {
    return this.title;
  }

  getCourses() {
    return this.courses;
  }
}
