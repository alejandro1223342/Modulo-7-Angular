import { Component, Input } from '@angular/core';
import { Company } from '../../model/Company';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-company-header',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './company-header.html'
})
export class CompanyHeaderComponent {
    @Input() company!: Company;
}
