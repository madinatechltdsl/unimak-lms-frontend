import { Student } from "./Student";

export class StudentDocument {
id: number;
documentName: string;
documentDescription: string;
documentType: string;
contentType: string;
dateUpdated: Date;
docUrl: string;
student: Student;


  constructor(id: number, documentName: string, documentDescription: string, documentType: string, contentType: string, dateUpdated: Date, docUrl: string, student: Student) {
    this.id = id;
    this.documentName = documentName;
    this.documentDescription = documentDescription;
    this.documentType = documentType;
    this.contentType = contentType;
    this.dateUpdated = dateUpdated;
    this.docUrl = docUrl;
    this.student = student;
  }
}
