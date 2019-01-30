import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PallindromesService } from '../pallindromes.service';
import { Pallindrome } from "../Pallindrome";
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators, ReactiveFormsModule  } from "@angular/forms";
import { PallindromeValidator } from './pallindrome.directive';


@Component({
  selector: 'app-add-pallindrome',
  templateUrl: './add-pallindrome.component.html',
  styleUrls: ['./add-pallindrome.component.css']
})
export class AddPallindromeComponent implements OnInit {

  public pallindrome: Pallindrome = {};

  public paForm: FormGroup;
  
  constructor(
    private router: Router,
    private psSvc: PallindromesService, private formBuilder: FormBuilder) { 
 
  }

  ngOnInit() {

    this.paForm = this.formBuilder.group({
          PallindromeData: ['', [Validators.required, PallindromeValidator.validatePallindrome]]
    })
    

  }



  public addPallindrome() {

    this.pallindrome = this.paForm.value;

     this.psSvc.addPallindrome(this.pallindrome)
        .subscribe(() => {
          this.router.navigateByUrl('/pallindrome-list');
        }, error => console.error(error));

   

  }

  submitForm() {
    //console.log(this.registerForm.value);
    if (this.paForm.valid) {
      this.addPallindrome();
    }

  }


}
