import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import {PictureService} from './picture.service';
import {HttpClientModule} from '@angular/common/http';


const appRoutes: Routes = [
  /*{ path: '', redirectTo: 'home', pathMatch: 'full'},*/
  { path: 'home', component: HomeComponent },
  ];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    HttpClientModule
  ],
  providers: [PictureService],
  bootstrap: [AppComponent]
})
export class AppModule { }
