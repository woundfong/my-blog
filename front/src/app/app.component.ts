import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { GlobalService } from './global/global.service';
import { Subscription } from 'rxjs/Subscription';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private subscrip_papers: Subscription;
  private isCollapsed:boolean = false;
  private isMediaShow:boolean = false;
  private isScrollTop:boolean = false;
  private isPaperPage:boolean = false;
  private headerTitle:string = "周焕丰";
  constructor(
    private globalService: GlobalService
  ){
    this.subscrip_papers = this.globalService.getSubjectPapers().subscribe(data=>{
      if(data === false) {
        this.isCollapsed = data;
        this.isPaperPage = data;
      }else {
        console.log(data);
        this.isCollapsed = true;
        this.isPaperPage = true;
        this.headerTitle = data;
        console.log(this.headerTitle);
      }
    })
  }
  
  // @ViewChild('boxShadow') private boxShadow: ElementRef;
  ngOnInit() {
    window.onscroll = ()=> {
      let top = document.documentElement.scrollTop || document.body.scrollTop;
      if(top >= 57){
        this.isScrollTop = true;
      }else{
        this.isScrollTop = false;
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
  hideShadow() {
    this.isMediaShow = !this.isMediaShow;
  }
  ngOnDestroy() {
      this.subscrip_papers.unsubscribe();
    }
}
