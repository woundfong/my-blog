import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global/global.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private globalService: GlobalService
  ) { }

  ngOnInit() {
    this.globalService.setSubjectPapers(false);
    this.globalService.setSubjectDescription('周焕丰 a noob of web developer...');
  }
  
}
