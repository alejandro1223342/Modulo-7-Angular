import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Course as CourseModel } from '../../model/Course';
import { StudentListComponent } from '../student-list/student-list';

@Component({
  selector: 'app-course',
  standalone: true,
  imports: [CommonModule, StudentListComponent],
  templateUrl: './course.html',
})
export class CourseComponent {
  @Input() course!: CourseModel;
}
