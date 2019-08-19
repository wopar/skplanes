import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import {RouterModule} from '@angular/router';
import {MaterialModule} from '../material/material.module';
import {MatIconModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MaterialModule,
    MatIconModule
  ],
  declarations: [DashboardComponent, LoginComponent, PageNotFoundComponent],
  exports: [DashboardComponent, LoginComponent]
})
export class CoreModule { }
