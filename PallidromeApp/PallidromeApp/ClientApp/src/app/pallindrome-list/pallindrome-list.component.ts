


import { Component, OnInit, Inject } from '@angular/core';

import { PallindromesService } from '../pallindromes.service';
import { Pallindrome } from "../Pallindrome";


@Component({
  selector: 'app-pallindrome-list',
  templateUrl: './pallindrome-list.component.html',
  styleUrls: ['./pallindrome-list.component.css']
})

export class PallindromeListComponent {
  public pallindromes: Pallindrome[];
  

  constructor(private PallindromesService: PallindromesService, 
    @Inject('BASE_URL') private baseUrl: string) {

    PallindromesService.baseUrl = baseUrl;

    this.PallindromesService.getPallindromes()
      .subscribe(result => {
        this.pallindromes = result;
      });


  }

}
