import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(){}
  private isCollapsed:boolean = false;
  private isMediaShow:boolean = false;
  private isScrollTop:boolean = false;
  // @ViewChild('boxShadow') private boxShadow: ElementRef;
  ngOnInit() {
    let _this = this;
    window.onscroll = function() {
      let top = document.documentElement.scrollTop || document.body.scrollTop;
      if(top >= 57){
        _this.isScrollTop = true;
      }else{
        _this.isScrollTop = false;
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
}
