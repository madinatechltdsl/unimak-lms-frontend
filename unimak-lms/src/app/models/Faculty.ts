import { Course } from "./Course";
import { Department } from "./Department";
import { ProgramType } from "./ProgramType";
import { Student } from "./Student";
import { User } from "./User";

export class Faculty {
  programId!: number;
  programName!: string;
  created: Date = new Date();
  createdBy = User;
  student!: Student;
// @ts-ignore
  departments: Department = new Department();
// @ts-ignore
  programTypes: ProgramType = new ProgramType();
courses: Course[] = new Array<Course>;


}
