import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeaveMessageComponent } from './leave-message.component';
import { RouterModule, Routes } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { HttpModule }    from '@angular/http';
import { FormsModule } from '@angular/forms';
import { LeaveMessageService } from './leave-message.service'
const routes: Routes = [
  {
    path: '',
    component: LeaveMessageComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    NgZorroAntdModule.forRoot(),
    HttpModule,
    FormsModule
  ],
  providers: [LeaveMessageService],
  declarations: [LeaveMessageComponent]
})
export class LeaveMessageModule { }
