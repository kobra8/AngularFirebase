import { Component, OnInit } from '@angular/core';
import { FlightsService } from '../core/services/flights.service';
import { Observable } from 'rxjs';
import { Flight } from 'src/app/models/flight.model';
import { MatDialog } from '@angular/material';
import { NewFlightComponent } from './new-flight/new-flight.component';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.scss']
})
export class FlightsComponent {

  flights$: Observable<Flight[]> = this.flightsService.getFlights();

  constructor(
    private flightsService: FlightsService,
    private dialog: MatDialog
  ) { }

  openNewFlightModal() {
    this.dialog.open(NewFlightComponent);
  }
}
