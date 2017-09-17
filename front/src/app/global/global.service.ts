import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class GlobalService {

  constructor() { }
  private subject_papers = new Subject<any>();
  public getSubjectPapers(): Observable<any> {
    return this.subject_papers.asObservable();
  }
  public setSubjectPapers(obj:any) {
    this.subject_papers.next(obj);
  }
}
