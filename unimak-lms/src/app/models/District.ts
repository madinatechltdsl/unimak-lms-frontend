import { Region } from "./Region";
import { Student } from "./Student";

export class District {
id: number;
districtName: string;
student: Student;
region: Region;


  constructor(id: number, districtName: string, student: Student, region: Region) {
    this.id = id;
    this.districtName = districtName;
    this.student = student;
    this.region = region;
  }
}
