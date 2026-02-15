import { Component, Input } from '@angular/core';
import { InvoiceItem } from '../../model/InvoiceItem';
import { InvoiceItemComponent } from '../invoice-item/invoice-item';

@Component({
  selector: 'app-invoice-detail',
  imports: [InvoiceItemComponent],
  templateUrl: './invoice-detail.html',
})
export class InvoiceDetail {
  @Input() items!: InvoiceItem[];
}
