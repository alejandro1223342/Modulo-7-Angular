import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { InventoryData } from '../model/InventoryData';
import { inventoryData } from '../data/inventory.data';

@Injectable({
    providedIn: 'root'
})
export class InventoryService {

    constructor() { }

    getInventoryData(): Observable<InventoryData> {
        return of(inventoryData);
    }

    getTotalStock(): number {
        return inventoryData.products.reduce((acc, product) => {
            const productTotal = product.stocks.reduce((pAcc, branch) => pAcc + branch.stock, 0);
            return acc + productTotal;
        }, 0);
    }
}
