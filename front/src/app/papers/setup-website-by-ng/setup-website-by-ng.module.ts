import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SetupWebsiteByNgComponent } from './setup-website-by-ng.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: SetupWebsiteByNgComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  declarations: [SetupWebsiteByNgComponent]
})
export class SetupWebsiteByNgModule { }
