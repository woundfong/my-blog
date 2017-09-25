import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GlobalService } from './global/global.service';
import { AuthGuardService } from './auth/auth-guard.service';
// import { SetupWebsiteByNgComponent } from './papers/setup-website-by-ng/setup-website-by-ng.component'
import {enableProdMode} from '@angular/core';
enableProdMode();
const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'setupWebSiteByNg',
    loadChildren: './papers/setup-website-by-ng/setup-website-by-ng.module#SetupWebsiteByNgModule' 
  },
  {
    path: 'about-me',
    loadChildren: './about-me/about-me.module#AboutMeModule'
  },
  {
    path: 'leave-message',
    loadChildren: './leave-message/leave-message.module#LeaveMessageModule'
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: HomeComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    NgZorroAntdModule.forRoot()
  ],
  providers: [GlobalService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
