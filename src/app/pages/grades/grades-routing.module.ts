﻿import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GradesComponent } from './grades.component';

const routes: Routes = [
  { path: '', component: GradesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GradesRoutingModule { }
