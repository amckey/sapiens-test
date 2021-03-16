import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatRadioButton, MatRadioChange } from '@angular/material/radio';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {

    constructor() { 
    }
  
    ngOnInit(): void {
      }

  optionsList = [
      {
        highlightedWord: true,
        title: 'Change car details and usage',
        body: 'Insure a new car or change car details e.g. <b>business use</b> mileage or registration number.',
        buttonValue: 'Not selected'
      },
      {
        highlightedWord: false,
        title: 'Change driver',
        body: 'Change driver details e.g. occupation, martial status or convictions.',
        buttonValue: 'Not selected'
      },
      {
        highlightedWord: false,
        title: 'Add driver',
        body: "Add a new driver (we can't insure driver under 21 at start of your poolicy).",
        buttonValue: 'Not selected'
      },
      {
        highlightedWord: false,
        title: 'Change or add cover',
        body: 'You can change your voluntary excess and add/edit your additional cover options',
        buttonValue: 'Not selected'
      },
      {
        highlightedWord: false,
        title: 'Change address',
        body: 'Change your address - remember a change of address may affect your premium',
        buttonValue: 'Not selected'
      },
      {
        highlightedWord: false,
        title: 'Change payment details',
        body: 'Change direct debit, credit/debit card, PayPal or Amazon pay details that we store for you.',
        buttonValue: 'Not selected'
      }
    ]

    

}
