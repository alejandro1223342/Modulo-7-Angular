import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-stock-summary',
    standalone: true,
    templateUrl: './stock-summary.html'
})
export class StockSummaryComponent {
    @Input() totalStock: number = 0;
}
