import { Component, signal } from '@angular/core';
import { LearningComponent } from './component/learning/learning';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LearningComponent],
  template: '<app-learning></app-learning>'
})
export class App {
  protected readonly title = signal('LearningApp');
}
