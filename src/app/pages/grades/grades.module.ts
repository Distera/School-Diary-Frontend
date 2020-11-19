import {NgModule} from '@angular/core';

import {GradesRoutingModule} from './grades-routing.module';

import {GradesComponent} from './grades.component';
import {NzListModule} from 'ng-zorro-antd/list';
import {CommonModule} from '@angular/common';
import {NzModalModule} from 'ng-zorro-antd/modal';
import {NzInputModule} from 'ng-zorro-antd/input';
import {FormsModule} from '@angular/forms';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzInputNumberModule} from "ng-zorro-antd/input-number";
import {NzSelectModule} from "ng-zorro-antd/select";


@NgModule({
  imports: [
    GradesRoutingModule,
    FormsModule,
    CommonModule,
    NzListModule,
    NzModalModule,
    NzInputModule,
    NzButtonModule,
    NzInputNumberModule,
    NzSelectModule
  ],
  declarations: [GradesComponent],
  exports: [GradesComponent]
})
export class GradesModule {
}
