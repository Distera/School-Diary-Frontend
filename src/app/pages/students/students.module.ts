import {NgModule} from '@angular/core';

import {StudentsRoutingModule} from './students-routing.module';

import {StudentsComponent} from './students.component';
import {NzListModule} from 'ng-zorro-antd/list';
import {CommonModule} from '@angular/common';
import {NzModalModule} from 'ng-zorro-antd/modal';
import {NzInputModule} from 'ng-zorro-antd/input';
import {FormsModule} from '@angular/forms';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzSelectModule} from "ng-zorro-antd/select";


@NgModule({
  imports: [
    StudentsRoutingModule,
    FormsModule,
    CommonModule,
    NzListModule,
    NzModalModule,
    NzInputModule,
    NzButtonModule,
    NzSelectModule
  ],
  declarations: [StudentsComponent],
  exports: [StudentsComponent]
})
export class StudentsModule {
}
