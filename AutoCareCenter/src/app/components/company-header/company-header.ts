import { CommonModule } from '@angular/common';
import { Company } from '../../model/Company';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-company-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './company-header.html',
  
})
export class CompanyHeaderComponent {
  @Input() company!: Company;

}
