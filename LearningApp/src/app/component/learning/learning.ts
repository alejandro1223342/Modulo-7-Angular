import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../services/course';
import { CourseComponent } from '../course/course';

@Component({
  selector: 'app-learning',
  standalone: true,
  imports: [CourseComponent],
  templateUrl: './learning.html',
})
export class LearningComponent implements OnInit {
  courses: any;

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.courses = this.courseService.getCourses();
  }

}
