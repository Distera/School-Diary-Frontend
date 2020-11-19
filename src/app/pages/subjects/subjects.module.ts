import {NgModule} from '@angular/core';

import {SubjectsRoutingModule} from './subjects-routing.module';

import {SubjectsComponent} from './subjects.component';
import {NzListModule} from 'ng-zorro-antd/list';
import {CommonModule} from '@angular/common';
import {NzModalModule} from 'ng-zorro-antd/modal';
import {NzInputModule} from 'ng-zorro-antd/input';
import {FormsModule} from '@angular/forms';
import {NzButtonModule} from 'ng-zorro-antd/button';


@NgModule({
  imports: [
    SubjectsRoutingModule,
    FormsModule,
    CommonModule,
    NzListModule,
    NzModalModule,
    NzInputModule,
    NzButtonModule
  ],
  declarations: [SubjectsComponent],
  exports: [SubjectsComponent]
})
export class SubjectsModule {
}
