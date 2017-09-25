import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global/global.service';
import { Headers, Http } from '@angular/http';
import { LeaveMessageService } from './leave-message.service';
import {NzMessageService} from 'ng-zorro-antd';
@Component({
  selector: 'app-leave-message',
  templateUrl: './leave-message.component.html',
  styleUrls: ['./leave-message.component.css']
})
export class LeaveMessageComponent implements OnInit {

  constructor(private leaveMessageService: LeaveMessageService,
  private globalService: GlobalService,
  private _message: NzMessageService) { }
  inputMsg:string = "";
  inputName:string = "";
  myName:string = "周焕丰";
  anonymous:boolean = false;
  ngOnInit() {
    this.globalService.setSubjectDescription('留言');
  }
  leaveMsg() {
    let param = {};
    if(!this.checkMsg()) {
      this._message.create('error', '含有非法字符');
      return;
    }
    if(this.inputMsg && !this.anonymous) {
      param = {name:this.inputName, msg: this.inputMsg};
    }else if(this.inputMsg && this.anonymous){
      param = {name:'匿名', msg: this.inputMsg};
    }
    this.leaveMessageService.leaveMsg(param).subscribe(data=>{
      if(data._body.code == '-200') {
        this._message.create('error', '留言失败');
      }else {
        this._message.create('success', '留言成功！');
        this.inputMsg = "";
        this.inputName = "";
        this.anonymous = false;
      }
    })
  }
  checkMsg() {
    let inj_str = "script|var|delete|exec";
    let inj_arr = inj_str.split('|');
    for(let i = 0; i < inj_arr.length; i++) {
      if(this.inputMsg.indexOf(inj_arr[i]) >= 0) {
        return false;
      }
    }
    return true;
  }
}
