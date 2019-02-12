import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Crew, Flight } from '../../models/flight.model';

@Component({
  selector: 'app-flight-form',
  templateUrl: './flight-form.component.html',
  styleUrls: ['./flight-form.component.scss']
})
export class FlightFormComponent implements OnInit {

  @Input() editMode = false;
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

  buildCrewMember(crewMember: Crew = {} as Crew) {
    return this.formBuilder.group({
      name: crewMember.name || '',
      job: crewMember.job || ''
    });
  }

  get crew() {
    return this.form.get('crew') as FormArray;
  }

  removeCrewMember (index: number) {
    this.crew.removeAt(index);
  }

  addCrewMember(crewMember?: Crew) {
    this.crew.push(this.buildCrewMember(crewMember));
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      code: ['SK', { validators: [Validators.required, Validators.minLength(4), Validators.maxLength(7)] }],
      origin: ['', { validators: [Validators.required] }],
      destination: ['', { validators: [Validators.required] }],
      departureTime: ['', { validators: [Validators.required] }],
      returnTime: ['', { validators: [Validators.required] }],
      additionalInformation: '',
      withSKPlanesDiscount: false,
      crew: this.formBuilder.array(this.editMode ? [] : [this.buildCrewMember()])
    });
  }

  setFlight(flight: Flight) {
    const {key, ...formData } = flight;
    this.form.patchValue(formData);
    console.log('Set flight fired');
    if (formData.crew) {
      formData.crew.forEach(crewMember => this.addCrewMember(crewMember));
    }
  }

}
