import { Component, Input } from '@angular/core';
import { Product } from '../../model/Product';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-product-list',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './product-list.html'
})
export class ProductListComponent {
    @Input() products: Product[] = [];
}
