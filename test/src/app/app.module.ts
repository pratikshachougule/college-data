import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{FormsModule} from '@angular/forms'
import{ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {MatRadioModule} from '@angular/material/radio'
import {MatIconModule} from '@angular/material/icon'
import {MatToolbarModule} from '@angular/material/toolbar';
import {HomeComponent} from './home/home.component'
import {StaffsComponent} from './staffs/staffs.component'
import {MatSelectModule} from '@angular/material/select';
import { ChildComponent } from './child/child.component';
import { StudentComponent } from './student/student.component';


@NgModule({
  declarations: [
    AppComponent,HomeComponent,StaffsComponent, ChildComponent, StudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,ReactiveFormsModule, BrowserAnimationsModule,MatRadioModule,MatIconModule,MatToolbarModule,MatSelectModule],
  providers: [MatRadioModule,MatIconModule,MatToolbarModule,MatSelectModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
