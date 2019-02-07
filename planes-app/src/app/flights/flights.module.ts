import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightsComponent } from './flights.component';
import { MaterialModule } from '../material/material.module';
import { FlightCardComponent } from './flight-card/flight-card.component';
import { NewFlightComponent } from './new-flight/new-flight.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  entryComponents: [NewFlightComponent],
  declarations: [FlightsComponent, FlightCardComponent, NewFlightComponent],
  exports: [FlightsComponent]
})
export class FlightsModule { }
