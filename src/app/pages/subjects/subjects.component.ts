import {Component} from '@angular/core';
import {SubjectsService} from '../../api/services/subjects.service';
import {SubjectDto} from '../../api/models/subject-dto';

@Component({
  selector: 'app-welcome',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent {
  $subjects = this.subjectsService.subjectsGet$Json();

  selectedSubject: SubjectDto | undefined;
  selectedSubjectId: number | undefined = undefined;

  constructor(private subjectsService: SubjectsService) {
  }

  reinitializeSubjects(): void {
    this.selectedSubjectId = undefined;
    this.selectedSubject = undefined;
    this.$subjects = this.subjectsService.subjectsGet$Json();
  }

  saveSelectedSubject(): void {
    (this.selectedSubjectId === undefined
        ? this.subjectsService.subjectsPost({body: this.selectedSubject})
        : this.subjectsService.subjectsIdPut({id: this.selectedSubjectId, body: this.selectedSubject})
    ).toPromise().then(() => this.reinitializeSubjects());
  }

  selectBlankSubject(): void {
    this.selectedSubjectId = undefined;
    this.selectedSubject = {};
  }

  selectSubject(id: number): void {
    this.selectedSubjectId = id;
    this.subjectsService.subjectsIdGet$Json({id}).toPromise().then(subject => this.selectedSubject = subject);
  }

  deleteSelectedSubject(): void {
    // tslint:disable-next-line:no-non-null-assertion
    this.subjectsService.subjectsIdDelete({id: this.selectedSubjectId!}).toPromise().finally(() => this.reinitializeSubjects());
  }
}
