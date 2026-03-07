import { Component, signal } from '@angular/core';
import { AutocareContainerComponent } from "./components/autocare-container/autocare-container";

@Component({
  selector: 'app-root',
  imports: [AutocareContainerComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('AutoCareCenter');
}
