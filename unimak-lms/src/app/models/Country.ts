import { Student } from "./Student";

export class Country {
  id: number;
  countryName: string;
  student: Student;
  iso3: string;


  constructor(id: number, countryName: string, student: Student, iso3: string) {
    this.id = id;
    this.countryName = countryName;
    this.student = student;
    this.iso3 = iso3;
  }
}
