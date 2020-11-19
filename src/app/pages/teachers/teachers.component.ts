import {Component} from '@angular/core';
import {TeachersService} from '../../api/services/teachers.service';
import {TeacherDto} from '../../api/models/teacher-dto';
import {SubjectsService} from "../../api/services/subjects.service";

@Component({
  selector: 'app-welcome',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent {
  $teachers = this.teachersService.teachersGet$Json();
  $subjects = this.subjectsService.subjectsGet$Json();

  selectedTeacher: TeacherDto | undefined;
  selectedTeacherId: number | undefined = undefined;

  constructor(private teachersService: TeachersService, private subjectsService: SubjectsService) {
  }

  reinitializeTeachers(): void {
    this.selectedTeacherId = undefined;
    this.selectedTeacher = undefined;
    this.$teachers = this.teachersService.teachersGet$Json();
  }

  saveSelectedTeacher(): void {
    (this.selectedTeacherId === undefined
        ? this.teachersService.teachersPost({body: this.selectedTeacher})
        : this.teachersService.teachersIdPut({id: this.selectedTeacherId, body: this.selectedTeacher})
    ).toPromise().then(() => this.reinitializeTeachers());
  }

  selectBlankTeacher(): void {
    this.selectedTeacherId = undefined;
    this.selectedTeacher = {subjectsIds : []};
  }

  selectTeacher(id: number): void {
    this.selectedTeacherId = id;
    this.teachersService.teachersIdGet$Json({id}).toPromise().then(teacher => this.selectedTeacher = teacher);
  }

  deleteSelectedTeacher(): void {
    // tslint:disable-next-line:no-non-null-assertion
    this.teachersService.teachersIdDelete({id: this.selectedTeacherId!}).toPromise().finally(() => this.reinitializeTeachers());
  }
}
