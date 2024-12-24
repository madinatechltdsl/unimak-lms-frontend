import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../service/student.service';
import { Student } from '../../models/Student';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-student-information',
  standalone: true,
  imports: [CommonModule, FormsModule, ],
  templateUrl: './student-information.component.html',
  styleUrls: ['./student-information.component.css']
})
export class StudentInformationComponent implements OnInit{

  students: Student[] =[];

  isModalOpen = false;
  currentStep: number = 1;
  sameAsCurrentAddress = false;

  openModal() {
    this.isModalOpen = true;
    this.currentStep = 1;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  constructor(private studentService: StudentService) {}

  ngOnInit() {
    this.fetchStudents();
  }

  fetchStudents() {
    this.studentService.getAllStudents().subscribe(
      (data: Student[]) => {
        this.students = data;
      },
      (error) => {
        console.error('Error fetching students:', error);
      }
    );
  }

  nextStep() {
    if (this.currentStep < 4) {
      this.currentStep++;
    }
  }


  previousStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

}
