import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {CarouselModule} from 'ngx-bootstrap/carousel';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutComponent } from './about/about.component';
import { CoursesComponent } from './courses/courses.component';
import { ContactComponent } from './contact/contact.component';
const appRoutes: Routes = [
  
  {
    path: 'about',
    component: AboutComponent,
    data: { title: 'Heroes List' }
  },
  { path: '',
    redirectTo: '/heroes',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,NavbarComponent,HomepageComponent,AboutComponent,CoursesComponent,ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, CarouselModule.forRoot(),
  ],
  providers:[{provide: CarouselConfig, useValue: {interval: 3000, noPause: true}}],

  bootstrap: [AppComponent]
})
export class AppModule { }
