import { Injectable } from '@angular/core';
import { Http, Headers }       from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
@Injectable()
export class LeaveMessageService {

  constructor(private http: Http) { }
  leaveMsg(message): Observable<any> {
    let body = "name="+message.name+"&msg="+message.msg;
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.post('api/leaveMsg', {name: message.name, msg:message.msg}).map(data=>{
      return data;
    });
  }
}
