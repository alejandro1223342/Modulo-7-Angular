import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AutoCareData } from '../model/AutoCareData';
import { autoCareData } from '../data/autocare.data';

@Injectable({
  providedIn: 'root',
})
export class AutocareService {
  constructor() {}
  
  getAutoCareData(): Observable<AutoCareData>{
    return of(autoCareData);
  }

  getTotalCapacity():number{
    return autoCareData.services.reduce((acc, service) => {
      const serviceTotal = service.capacities.reduce((cAcc, branch) => cAcc + branch.capacity, 0);
      return acc + serviceTotal;
    }, 0);
  }
}
