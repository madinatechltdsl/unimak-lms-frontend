import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-student-information',
  standalone: true,
  imports: [CommonModule, FormsModule, ],
  templateUrl: './student-information.component.html',
  styleUrl: './student-information.component.css'
})
export class StudentInformationComponent {
  isModalOpen = false;
  currentStep: number = 1;

  student = {
    photo: '',
    phoneNumber: '',
    email: '',
    emergencyContactName: '',
    emergencyContactNumber: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    country: '',
    region: '',
    district: '',
    permanentAddressLine1: '',
    permanentAddressLine2: '',
    permanentCity: '',
    permanentCountry: '',
    permanentRegion: '',
    permanentDistrict: '',
    studentId: '',
    firstName: '',
    lastName: '',
    gender: '',
    birthDate: '',
    department: '',
    enrollmentDate: '',
    status: '',
    level: '',
    studentType: '',
  };


  sameAsCurrentAddress = false;

  countries = ['Sierra Leone', 'USA', 'Canada', 'UK', 'Ghana', 'Nigeria', 'Liberia'];
  regions = ['Eastern ', 'Northern', 'North Western', 'Southern ', 'Western Area', 'Western Urban'];
  districts = ['Kailahun', 'Kenema', 'Kono', 'Bombali', 'Falaba', 'Koinadugu', 'Tonkolili'];
  departments = ['Computer Science', 'Law', 'Public Health', 'Agriculture'];

  openModal() {
    this.isModalOpen = true;
    this.currentStep = 1;
  }

  closeModal(event?: any) {
    this.isModalOpen = false;
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

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.student.photo = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }


  saveStudent() {
    console.log('Student Data:', this.student);
    this.closeModal();
  }
}
