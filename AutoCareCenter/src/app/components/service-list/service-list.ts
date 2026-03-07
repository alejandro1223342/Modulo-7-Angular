import { CommonModule } from '@angular/common';
import { Service } from '../../model/Service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-service-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './service-list.html',
})
export class ServiceListComponent {
  @Input() services: Service[] = [];
}
