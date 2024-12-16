import { Address2 } from "./Address2";
import { Country } from "./Country";
import { Department } from "./Department";
import { District } from "./District";
import { Faculty } from "./Faculty";
import { Region } from "./Region";
import { StudentDocument } from "./StudentDocument";
import { User } from "./User";

export class Student {
id: number;
studentId: string;
firstName: string;
lastName: string;
email: string;
enrollmentDate: Date;
graduationDate: Date;
birthdate: Date;
gender: string;
phone: string;
address1: string;
address2: string;
pamanentAddress: Address2;
city: string;
district: District;
country: Country;
region: Region;
emergencyContact: string;
emergencyContactName: string;
studentType: string;
status: number;
level: number;
photoURL: string;
modified: Date;
modifiedBy: User;
created: Date;
createdBy: User;
department: Department;
faculty: Faculty;
studentDocuments:  StudentDocument[ ] = new Array<StudentDocument>();


  constructor(id: number, studentId: string, firstName: string, lastName: string, email: string, enrollmentDate: Date, graduationDate: Date, birthdate: Date, gender: string, phone: string, address1: string, address2: string, pamanentAddress: Address2, city: string, district: District, country: Country, region: Region, emergencyContact: string, emergencyContactName: string, studentType: string, status: number, level: number, photoURL: string, modified: Date, modifiedBy: User, created: Date, createdBy: User, department: Department, faculty: Faculty, studentDocuments: []) {
    this.id = id;
    this.studentId = studentId;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.enrollmentDate = enrollmentDate;
    this.graduationDate = graduationDate;
    this.birthdate = birthdate;
    this.gender = gender;
    this.phone = phone;
    this.address1 = address1;
    this.address2 = address2;
    this.pamanentAddress = pamanentAddress;
    this.city = city;
    this.district = district;
    this.country = country;
    this.region = region;
    this.emergencyContact = emergencyContact;
    this.emergencyContactName = emergencyContactName;
    this.studentType = studentType;
    this.status = status;
    this.level = level;
    this.photoURL = photoURL;
    this.modified = modified;
    this.modifiedBy = modifiedBy;
    this.created = created;
    this.createdBy = createdBy;
    this.department = department;
    this.faculty = faculty;
    this.studentDocuments = studentDocuments;
  }
}
