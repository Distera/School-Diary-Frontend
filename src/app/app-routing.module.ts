import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/subjects' },
  { path: 'subjects', loadChildren: () => import('./pages/subjects/subjects.module').then(m => m.SubjectsModule) },
  { path: 'students', loadChildren: () => import('./pages/students/students.module').then(m => m.StudentsModule) },
  { path: 'grades', loadChildren: () => import('./pages/grades/grades.module').then(m => m.GradesModule) },
  { path: 'teachers', loadChildren: () => import('./pages/teachers/teachers.module').then(m => m.TeachersModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
