import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import {PictureService} from './picture.service';
import {HttpClientModule} from '@angular/common/http';
import { AnswerComponent } from './answer/answer.component';


const appRoutes: Routes = [
  /*{ path: '', redirectTo: 'home', pathMatch: 'full'},*/
  { path: 'home', component: HomeComponent },
  { path: 'answer', component: AnswerComponent },
  ];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    AnswerComponent
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
