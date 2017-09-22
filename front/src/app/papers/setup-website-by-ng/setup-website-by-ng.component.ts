import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../global/global.service';
import { Subscription } from 'rxjs/Subscription';

const securityGroupAllSteps = [
  {
      index: 0,
      src: '../../../assets/securityGroupsList.png',
      title: '安全组列表'
  },
  {
      index: 1,
      src: '../../../assets/rulesConfig.png',
      title: '配置规则'
  },
  {
      index: 2,
      src: '../../../assets/addRules.png',
      title: '添加安全组规则（SSH，对所有地址段开放）'
  },
]
@Component({
  selector: 'app-setup-website-by-ng',
  templateUrl: './setup-website-by-ng.component.html',
  styleUrls: ['./setup-website-by-ng.component.css','../papers-common-style.css']
})
export class SetupWebsiteByNgComponent implements OnInit {
  paperTitle:string = "阿里云服务器布置angular2网站";
  securityGroupSteps:Object = {};
  isFadeHeaderShow:boolean = true;
  isShowImg:boolean = false;
  subscrip_fadeHeader: Subscription;
  domainIndex:number = 0;
  environmentIndex:number = 0;
  constructor(
    private globalService: GlobalService
  ) {
    this.subscrip_fadeHeader = this.globalService.getSubjectFadeHeader().subscribe(data=>{
      this.isFadeHeaderShow = data;
    })
  }

  ngOnInit() {
    this.globalService.setSubjectPapers('阿里云服务器布置angular2网站');
    this.securityGroupSteps = securityGroupAllSteps[0];
  }
  changeSecurityGroupSteps(index){
    this.securityGroupSteps = securityGroupAllSteps[index];
  }
  toggleMagnify(target) {
    // console.log(target.parentNode.parentNode)
    if(target.parentNode.parentNode.tagName.toLowerCase()==='figure'){
      if(!this.isShowImg) {
        // console.log(target.parentNode.children[0])
        let classVal = target.parentNode.getAttribute("class");
        classVal = classVal.concat(" showImg");
        target.parentNode.setAttribute("class", classVal);
        this.isShowImg = true;
      }else {
        let classVal = target.parentNode.getAttribute("class");
        classVal = classVal.replace(" showImg","");
        target.parentNode.setAttribute("class", classVal);
        this.isShowImg = false;
      }
    }
  }
  
}
