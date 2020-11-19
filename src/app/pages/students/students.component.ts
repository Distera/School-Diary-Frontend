import {Component} from '@angular/core';
import {StudentsService} from '../../api/services/students.service';
import {StudentDto} from '../../api/models/student-dto';

@Component({
  selector: 'app-welcome',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {
  $students = this.studentsService.studentsGet$Json();

  selectedStudent: StudentDto | undefined;
  selectedStudentId: number | undefined = undefined;

  constructor(private studentsService: StudentsService) {
  }

  reinitializeStudents(): void {
    this.selectedStudentId = undefined;
    this.selectedStudent = undefined;
    this.$students = this.studentsService.studentsGet$Json();
  }

  saveSelectedStudent(): void {
    (this.selectedStudentId === undefined
        ? this.studentsService.studentsPost({body: this.selectedStudent})
        : this.studentsService.studentsIdPut({id: this.selectedStudentId, body: this.selectedStudent})
    ).toPromise().then(() => this.reinitializeStudents());
  }

  selectBlankStudent(): void {
    this.selectedStudentId = undefined;
    this.selectedStudent = {gradesIds: []};
  }

  selectStudent(id: number): void {
    this.selectedStudentId = id;
    this.studentsService.studentsIdGet$Json({id}).toPromise().then(student => this.selectedStudent = student);
  }

  deleteSelectedStudent(): void {
    // tslint:disable-next-line:no-non-null-assertion
    this.studentsService.studentsIdDelete({id: this.selectedStudentId!}).toPromise().finally(() => this.reinitializeStudents());
  }
}
