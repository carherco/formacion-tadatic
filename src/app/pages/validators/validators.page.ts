import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { spanishIbanValidator, countriesIbanValidator } from 'src/app/validators/spanishIbanValidator';


@Component({
  selector: 'app-validators',
  templateUrl: './validators.page.html',
  styleUrls: ['./validators.page.scss'],
})
export class ValidatorsPage implements OnInit {

  ibanControl: FormControl = new FormControl('', [Validators.required, countriesIbanValidator( ['ES', 'FR', 'PO'] )]);
  otroIbanControl: FormControl = new FormControl('', [Validators.required, countriesIbanValidator( ['US', 'EN'] )]);

  constructor() { }

  ngOnInit() {
  }

}
