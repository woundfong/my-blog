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
  private subject_fadeHeader = new Subject<boolean>();
  private lastFadeHeader:boolean = true;
  public getSubjectFadeHeader(): Observable<boolean> {
    return this.subject_fadeHeader.asObservable();
  }
  public setSubjectFadeHeader(flag:boolean) {
    if(flag !== this.lastFadeHeader) {
      this.subject_fadeHeader.next(flag);
      this.lastFadeHeader = flag;
    }
  }
}
