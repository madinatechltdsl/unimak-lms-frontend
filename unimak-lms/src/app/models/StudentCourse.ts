import { Course } from "./Course";
import { Student } from "./Student";

export class StudentCourse {
  id!: number;
// @ts-ignore
  student = new Student();
// @ts-ignore
  course = new Course();

}
