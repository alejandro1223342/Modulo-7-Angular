import { Student } from "../model/Student";
import { Course } from "../model/Course";

export const learningData: Course = {
    id: 1,
    name: 'Angular Course',
    students: [
        {
            id: 1,
            identification: '123456789',
            name: 'John',
            surname: 'Doe'
        },
        {
            id: 2,
            identification: '987654321',
            name: 'Jane',
            surname: 'Smith'
        },
        {
            id: 3,
            identification: '456789123',
            name: 'Alice',
            surname: 'Johnson'
        },
        {
            id: 4,
            identification: '789123456',
            name: 'Bob',
            surname: 'Brown'
        }
    ],

};