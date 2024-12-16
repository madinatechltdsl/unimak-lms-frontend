import { Faculty } from "./Faculty";
import { User } from "./User";

export class Course {
id: number;
courseCode: string ;
courseName: string;
description: string;
credits: number;
faculty: Faculty;
modified: Date;
// @ts-ignore
  modifiedBy: User = null;
created: Date;
// @ts-ignore
  createdBy: User = null;


  constructor(id: number, courseCode: string, courseName: string, description: string, credits: number, faculty: Faculty, modified: Date, modifiedBy: User, created: Date, createdBy: User) {
    this.id = id;
    this.courseCode = courseCode;
    this.courseName = courseName;
    this.description = description;
    this.credits = credits;
    this.faculty = faculty;
    this.modified = modified;
    this.modifiedBy = modifiedBy;
    this.created = created;
    this.createdBy = createdBy;
  }
}
