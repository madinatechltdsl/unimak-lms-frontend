import { Student } from "./Student";
import { Country } from "./Country";

export class Region {
id: number;
regionName: string;
// @ts-ignore
  country: Country = new Country();
// @ts-ignore
  student: Student = new Student();


  constructor(id: number, regionName: string, country: Country, student: Student) {
    this.id = id;
    this.regionName = regionName;
    this.country = country;
    this.student = student;
  }
}
