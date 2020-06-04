import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { spanishIbanValidator } from 'src/app/validators/SpanishIbanValidator';

@Component({
  selector: 'app-validators',
  templateUrl: './validators.page.html',
  styleUrls: ['./validators.page.scss'],
})
export class ValidatorsPage implements OnInit {

  ibanControl: FormControl = new FormControl('', spanishIbanValidator());

  constructor() { }

  ngOnInit() {
  }

}
