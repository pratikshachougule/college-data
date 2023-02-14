import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StaffsComponent } from './staffs/staffs.component';
import { StudentComponent } from './student/student.component';
const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    {path:'',component:HomeComponent},
    {path:'home',component:HomeComponent},
    {path:'staffs',component:StaffsComponent},
    {path:'student',component:StudentComponent}
  ])],
  exports: [RouterModule]
})
  export class AppRoutingModule { }
