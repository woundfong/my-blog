import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SetupWebsiteByNgComponent } from './setup-website-by-ng.component';
import { RouterModule, Routes } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';

const routes: Routes = [
  {
    path: '',
    component: SetupWebsiteByNgComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    NgZorroAntdModule.forRoot()
  ],
  declarations: [SetupWebsiteByNgComponent]
})
export class SetupWebsiteByNgModule { }
