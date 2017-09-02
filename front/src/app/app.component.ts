import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(){}
  private isCollapsed:boolean = true;
  ngOnInit() {
  }
  collapseChange(){
    console.log(this.isCollapsed);
  }
}
