import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightsComponent } from './flights.component';
import {MaterialModule} from '../material/material.module';
import { FlightCardComponent } from './flight-card/flight-card.component';
import { NewFlightComponent } from './new-flight/new-flight.component';
import { FlightFormComponent } from './flight-form/flight-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DetailsComponent } from './details/details.component';
import { EditFlightComponent } from './edit-flight/edit-flight.component';
import {FlightsRoutingModule} from './flights-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlightsRoutingModule
  ],
  entryComponents: [NewFlightComponent, DetailsComponent],
  declarations: [FlightsComponent, FlightCardComponent, NewFlightComponent, FlightFormComponent, DetailsComponent, EditFlightComponent],
  exports: [FlightsComponent]
})
export class FlightsModule { }
