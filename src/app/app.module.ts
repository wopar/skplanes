import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {MaterialModule} from './material/material.module';
import {CoreModule} from './core/core.module';
import {MatIconModule} from '@angular/material';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {FlightsModule} from './flights/flights.module';
import { FlightCardComponent } from './flights/flight-card/flight-card.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AngularFireAuthModule} from '@angular/fire/auth';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    AppRoutingModule,
    MaterialModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
