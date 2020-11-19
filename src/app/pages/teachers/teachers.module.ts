import {NgModule} from '@angular/core';

import {TeachersRoutingModule} from './teachers-routing.module';

import {TeachersComponent} from './teachers.component';
import {NzListModule} from 'ng-zorro-antd/list';
import {CommonModule} from '@angular/common';
import {NzModalModule} from 'ng-zorro-antd/modal';
import {NzInputModule} from 'ng-zorro-antd/input';
import {FormsModule} from '@angular/forms';
import {NzButtonModule} from 'ng-zorro-antd/button';
import { NzSelectModule } from 'ng-zorro-antd/select';

@NgModule({
  imports: [
    TeachersRoutingModule,
    FormsModule,
    CommonModule,
    NzListModule,
    NzModalModule,
    NzInputModule,
    NzButtonModule,
    NzSelectModule
  ],
  declarations: [TeachersComponent],
  exports: [TeachersComponent]
})
export class TeachersModule {
}
