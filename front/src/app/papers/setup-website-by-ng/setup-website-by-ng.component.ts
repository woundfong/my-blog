import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../global/global.service';

@Component({
  selector: 'app-setup-website-by-ng',
  templateUrl: './setup-website-by-ng.component.html',
  styleUrls: ['./setup-website-by-ng.component.css']
})
export class SetupWebsiteByNgComponent implements OnInit {

  constructor(
    private globalService: GlobalService
  ) { }

  ngOnInit() {
    this.globalService.setSubjectPapers('阿里云服务器布置angular2网站');
  }
  
}
