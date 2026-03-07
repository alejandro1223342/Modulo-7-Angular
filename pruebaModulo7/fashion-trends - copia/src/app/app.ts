import { Component, signal } from '@angular/core';
import { InventoryContainerComponent } from './components/inventory-container/inventory-container';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [InventoryContainerComponent],
  templateUrl: './app.html'
})
export class App {
  protected readonly title = signal('fashion-trends');
}
