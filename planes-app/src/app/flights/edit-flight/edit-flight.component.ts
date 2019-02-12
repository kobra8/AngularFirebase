import { Component, ViewChild } from '@angular/core';
import { Flight } from 'src/app/models/flight.model';
import { FlightsService } from '../../core/services/flights.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FlightFormComponent } from '../flight-form/flight-form.component';
import { tap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-edit-flight',
  templateUrl: './edit-flight.component.html',
  styleUrls: ['./edit-flight.component.scss']
})
export class EditFlightComponent {

  @ViewChild('flightForm') flightForm: FlightFormComponent;

  flight: Flight;

  constructor(
    private flightsService: FlightsService,
    private router: Router,
    private route: ActivatedRoute,
    private toast: MatSnackBar
  ) {}

  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterViewInit() {
    this.loadFlight();
  }

  private loadFlight() {
    const key = this.route.snapshot.params['key'];
    this.flightsService.getFlight(key).pipe(
      tap(flight => this.flightForm.setFlight(flight))
      ).subscribe(flight => this.flight = flight);
  }

  saveEdited() {
    this.flightsService.sendEdited(this.flight.key, this.flightForm.form.value)
    .then(this.onEditSuccess.bind(this), this.onFailure.bind(this));
  }

  removeFlight() {
    this.flightsService.removeFlight(this.flight.key)
    .then(this.onRemoveSuccess.bind(this), this.onFailure.bind(this));
  }

  private onEditSuccess() {
    this.router.navigate(['/dashboard']);
    this.toast.open(`Flight ${this.flight.code} has been successfully updated.`, '', { panelClass: 'toast-success'});
  }

  private onRemoveSuccess() {
    this.router.navigate(['/dashboard']);
    this.toast.open(`Flight ${this.flight.code} has been successfully removed.`, '', { panelClass: 'toast-success'});
  }

  private onFailure(error) {
    this.toast.open(error.message, '', { panelClass: 'toast-error'});
  }

}
