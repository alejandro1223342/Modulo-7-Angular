import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, of } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';
import { InventoryData } from '../model/InventoryData';
import { Company } from '../model/Company';
import { Product } from '../model/Product';

@Injectable({
    providedIn: 'root'
})
export class InventoryService {
    private apiUrl = 'http://localhost:3000/api';

    constructor(private http: HttpClient) { }

    getInventoryData(): Observable<InventoryData> {
        console.log('InventoryService: solicitando datos del backend...');
        return this.http.get<InventoryData>(`${this.apiUrl}/inventory`);
    }

    getTotalStock(products: Product[]): number {
        return products.reduce((acc, product) => {
            const productTotal = product.stocks.reduce((pAcc, branch) => pAcc + branch.stock, 0);
            return acc + productTotal;
        }, 0);
    }
}
