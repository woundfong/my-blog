import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { GlobalService } from './global/global.service';
import { Subscription } from 'rxjs/Subscription';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  subscrip_papers: Subscription;
  subscrip_description: Subscription;  
  isCollapsed:boolean = false;
  isMediaShow:boolean = false;
  isScrollTop:boolean = false;
  isPaperPage:boolean = false;
  headerTitle:string = "周焕丰";
  description:string = "周焕丰 a web developer noob..."
  constructor(
    private globalService: GlobalService
  ){
    this.subscrip_papers = this.globalService.getSubjectPapers().subscribe(data=>{
      if(data === false) {
        this.isCollapsed = data;
        this.isPaperPage = data;
      }else {
        this.isCollapsed = true;
        this.isPaperPage = true;
        this.headerTitle = data;
      }
    });
    this.subscrip_description = this.globalService.getSubjectDescription().subscribe(sub=>{
      this.description = sub;
    })
  }
  
  // @ViewChild('boxShadow') private boxShadow: ElementRef;
  ngOnInit() {
    window.onscroll = ()=> {
      let top = document.documentElement.scrollTop || document.body.scrollTop;
      if(top >= 57){
        this.isScrollTop = true;
        this.globalService.setSubjectFadeHeader(false);
      }else{
        this.isScrollTop = false;
        this.globalService.setSubjectFadeHeader(true);
      }
      
    }
  }
  changeCollapsed() {
    let width = document.body.offsetWidth;
    if(width < 1000){
      this.isMediaShow = !this.isMediaShow;
    }else{
      this.isCollapsed = !this.isCollapsed;
    }
  }
  clickMenu() {
    let width = document.body.offsetWidth;
    if(width < 1000){
      this.isMediaShow = !this.isMediaShow;
    }
  }
  hideShadow() {
    this.isMediaShow = !this.isMediaShow;
  }
  ngOnDestroy() {
    this.subscrip_papers.unsubscribe();
    this.subscrip_description.unsubscribe();
  }
}
