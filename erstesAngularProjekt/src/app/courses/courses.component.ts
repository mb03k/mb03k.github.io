import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  template: '<h2>{{ title }}</h2>'
})

export class CoursesComponent {
  title = "List of courses";
}
