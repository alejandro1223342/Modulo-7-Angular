import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Student } from '../../model/Student';
import { StudentItemComponent } from '../student-item/student-item';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [CommonModule, StudentItemComponent],
  templateUrl: './student-list.html',
})
export class StudentListComponent {
  @Input() students: Student[] = [];
}
