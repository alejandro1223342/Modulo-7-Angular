import { Injectable } from '@angular/core';
import { learningData } from '../data/learning.data';
import { Course as CourseModel } from '../model/Course';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private courses: CourseModel = learningData;
  getCourses(): CourseModel {
    return this.courses;
  }
}
