import {Component} from '@angular/core';
import {GradesService} from '../../api/services/grades.service';
import {GradeDto} from '../../api/models/grade-dto';
import {StudentsService} from "../../api/services/students.service";
import {TeachersService} from "../../api/services/teachers.service";
import {SubjectsService} from "../../api/services/subjects.service";

@Component({
  selector: 'app-welcome',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.css']
})
export class GradesComponent {
  $grades = this.gradesService.gradesGet$Json();
  $students = this.studentsService.studentsGet$Json();
  $subjects = this.subjectsService.subjectsGet$Json();
  $teachers = this.teachersService.teachersGet$Json();

  selectedGrade: GradeDto | undefined;
  selectedGradeId: number | undefined = undefined;

  constructor(private gradesService: GradesService, private studentsService: StudentsService, private subjectsService: SubjectsService,private teachersService: TeachersService) {
  }

  reinitializeGrades(): void {
    this.selectedGradeId = undefined;
    this.selectedGrade = undefined;
    this.$grades = this.gradesService.gradesGet$Json();
  }

  saveSelectedGrade(): void {
    (this.selectedGradeId === undefined
        ? this.gradesService.gradesPost({body: this.selectedGrade})
        : this.gradesService.gradesIdPut({id: this.selectedGradeId, body: this.selectedGrade})
    ).toPromise().then(() => this.reinitializeGrades());
  }

  selectBlankGrade(): void {
    this.selectedGradeId = undefined;
    this.selectedGrade = {};
  }

  selectGrade(id: number): void {
    this.selectedGradeId = id;
    this.gradesService.gradesIdGet$Json({id}).toPromise().then(grade => this.selectedGrade = grade);
  }

  deleteSelectedGrade(): void {
    // tslint:disable-next-line:no-non-null-assertion
    this.gradesService.gradesIdDelete({id: this.selectedGradeId!}).toPromise().finally(() => this.reinitializeGrades());
  }
}
