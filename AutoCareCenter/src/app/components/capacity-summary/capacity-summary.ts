import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-capacity-summary',
  imports: [],
  templateUrl: './capacity-summary.html',
})
export class CapacitySummaryComponent {
  @Input() totalCapacity: number=0;
}
