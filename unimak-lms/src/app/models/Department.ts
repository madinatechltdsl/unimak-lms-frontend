import { Student } from "./Student";
import { Faculty } from "./Faculty"

export class Department {
id: number;
departmentName: string;
location: string;
created: Date;
student: Student;
faculties: Faculty[] = new Array<Faculty>();


  constructor(id: number, departmentName: string, location: string, created: Date, student: Student, faculties: []) {
    this.id = id;
    this.departmentName = departmentName;
    this.location = location;
    this.created = created;
    this.student = student;
    this.faculties = faculties;
  }
}
