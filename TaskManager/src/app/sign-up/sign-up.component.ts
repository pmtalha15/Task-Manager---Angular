import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CountriesService } from '../countries.service';
import { Country } from '../country';
import { CustomValidatorsService } from '../custom-validators.service';
import { LoginService } from '../login.service';
import { SignUpViewModel } from '../sign-up-view-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit{
  signUpForm : FormGroup | any;
  genders = ["Male","Female"];
  countries : Country[] | any;
  registerError: string | null = null;
  constructor(private countriesService : CountriesService, private formBuilder: FormBuilder, 
    private customValidatorService: CustomValidatorsService, private loginService: LoginService, private router:Router){

  }

  ngOnInit(){
    this.countriesService.getCountries().subscribe((response)=>{
      this.countries = response;
    })
    this.signUpForm = this.formBuilder.group({
      personName: this.formBuilder.group({
        firstName: [null,[Validators.required, Validators.minLength(2)]],
        lastName: [null,[Validators.required, Validators.minLength(2)]],
      }),
      email: [null,[Validators.required, Validators.email],[this.customValidatorService.DuplicateEmailValidator()],{updateOn:'blur'}],
      mobile: [null,[Validators.required, Validators.pattern(/^[789]\d{9}$/)]],
      dateOfBirth: [null,[Validators.required, this.customValidatorService.minimumAgeValidator(18)]],
      password:[null,[Validators.required]],
      confirmPassword:[null,[Validators.required]],
      gender:[null,[Validators.required]],
      countryID: [null,[Validators.required]],
      receiveNewsLetters: [null,[Validators.required]],
      skills:this.formBuilder.array([])
    },{
      validators:[
        this.customValidatorService.compareValidator("confirmPassword","password")
      ]
    });

    this.signUpForm.valueChanges.subscribe((value:any)=>{
      console.log(value)
    })
  }

  onSubmitClick(){
    this.signUpForm["submitted"]=true;
    console.log(this.signUpForm.value);

    if(this.signUpForm.valid){
      var signUpModel = this.signUpForm.value as SignUpViewModel;
      this.loginService.Register(signUpModel).subscribe(
        (response)=>{
          this.router.navigate(["tasks"]);
        },(error)=>{
          console.log(error);
          this.registerError = "Unable to Submit";
        })
    }
  }

  onAddSkill(){
    var formGroup = new FormGroup({
      skillName: new FormControl(null),
      skillLevel: new FormControl(null)
    });

    (<FormArray>this.signUpForm.get('skills')).push(formGroup);
  }

  onRemoveClick(index : number){
    (<FormArray>this.signUpForm.get("skills")).removeAt(index);
  }

}
