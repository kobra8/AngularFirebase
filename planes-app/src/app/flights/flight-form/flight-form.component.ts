import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { Crew } from '../../models/flight.model';

@Component({
  selector: 'app-flight-form',
  templateUrl: './flight-form.component.html',
  styleUrls: ['./flight-form.component.scss']
})
export class FlightFormComponent implements OnInit {

  form: FormGroup;
  jobs = [
    {label: 'Stewardess', value: 'stewardes'},
    {label: 'Senior Cabin Crew', value: 'senior_cabin_crew'},
    {label: 'Pilot', value: 'pilot'},
    {label: 'Co-Pilot', value: 'co_pilot'},
    {label: 'Mechanic', value: 'mechanic'},
  ];

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  buildCrewMember() {
    return this.formBuilder.group({
      name: '',
      job: ''
    });
  }

  get crew() {
    return this.form.get('crew') as FormArray;
  }

  removeCrewMember (index) {
    this.crew.removeAt(index);
  }

  addCrewMember() {
    this.crew.push(this.buildCrewMember());
    console.log(this.form);
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      code: '',
      origin: '',
      destination: '',
      departureTime: '',
      returnTime: '',
      additionalInformation: '',
      withSKPlanesDiscount: false,
      crew: this.formBuilder.array([this.buildCrewMember()])
    });
  }

}
