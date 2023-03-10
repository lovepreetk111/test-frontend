import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { CourseSub1Component } from './pages/course-sub1/course-sub1.component';
import { CourseComponent } from './pages/course/course.component';
import { EventSub1Component } from './pages/event-sub1/event-sub1.component';
import { EventComponent } from './pages/event/event.component';
import { HomeComponent } from './pages/home/home.component';

import { NoticeComponent } from './pages/notice/notice.component';

import { StudentSupportComponent } from './pages/student-support/student-support.component';



const routes: Routes = [
  {path:'', component:HomeComponent},
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'contact',
    component:ContactUsComponent
  },
  {
    path:'course',
    component:CourseComponent
  },
  {
    path:'course/:coursename',
    component:CourseSub1Component
  },
  {
    path:'event',
    component:EventComponent
  },
  {
   path:'student-support',
   component:StudentSupportComponent
  },
 
{
   path:'event/techkriti',
   component:EventSub1Component
  },
  {
    path:'notice',
    component:NoticeComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }