import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global/global.service';
@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  constructor(
    private globalService: GlobalService
  ) { }

  ngOnInit() {
    this.globalService.setSubjectDescription('个人介绍');
  }

}
