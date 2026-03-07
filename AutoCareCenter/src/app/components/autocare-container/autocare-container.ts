import { Component, OnInit } from '@angular/core';
import { CompanyHeaderComponent } from "../company-header/company-header";
import { ServiceListComponent } from "../service-list/service-list";
import { CapacitySummaryComponent } from "../capacity-summary/capacity-summary";
import { CommonModule } from '@angular/common';
import { AutocareService } from '../../services/autocare.service';
import { AutoCareData } from '../../model/AutoCareData';

@Component({
  selector: 'app-autocare-container',
  standalone: true,
  imports: [CommonModule, CompanyHeaderComponent, ServiceListComponent, CapacitySummaryComponent],
  templateUrl: './autocare-container.html',
})
export class AutocareContainerComponent implements OnInit {
  autoCareData!: AutoCareData;
  totalCapacity: number = 0;

  constructor(private autoCareService: AutocareService) { }

  ngOnInit(): void {
    this.autoCareService.getAutoCareData().subscribe(data => {
      this.autoCareData = data;
    });
    this.totalCapacity = this.autoCareService.getTotalCapacity();
  }
}
