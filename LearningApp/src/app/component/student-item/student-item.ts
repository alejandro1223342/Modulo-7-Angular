import { Component, Input } from '@angular/core';
import { Student } from '../../model/Student';

@Component({
  selector: 'app-student-item',
  standalone: true,
  templateUrl: './student-item.html',
})
export class StudentItemComponent {
  @Input() student!: Student;
}
