import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryService } from '../../services/inventory.service';
import { InventoryData } from '../../model/InventoryData';
import { CompanyHeaderComponent } from '../company-header/company-header';
import { ProductListComponent } from '../product-list/product-list';
import { StockSummaryComponent } from '../stock-summary/stock-summary';

@Component({
    selector: 'app-inventory-container',
    standalone: true,
    imports: [CommonModule, CompanyHeaderComponent, ProductListComponent, StockSummaryComponent],
    templateUrl: './inventory-container.html'
})
export class InventoryContainerComponent implements OnInit {
    inventoryData!: InventoryData;
    totalStock: number = 0;

    constructor(private inventoryService: InventoryService) { }

    ngOnInit(): void {
        this.inventoryService.getInventoryData().subscribe(data => {
            this.inventoryData = data;
        });
        this.totalStock = this.inventoryService.getTotalStock();
    }
}
