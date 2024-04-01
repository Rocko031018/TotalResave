import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import ValidateAllForm from 'src/app/helpers/validateform';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  type: string="password";
  isText:boolean=false;
  eyeIcon:string = "fa-eye-slash"
  signUpForm!: FormGroup;
  constructor(private fb: FormBuilder){

  }



  ngOnInit(): void {
    this.signUpForm=this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required],
      userName: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  hideShowPass(){
    this.isText = !this.isText;
    this.isText ? this.eyeIcon="fa-eye" : this.eyeIcon = "fa-eye-slash";
    this.isText ? this.type = "text" : this.type = "password";

  }

  onSingup(){
    if(this.signUpForm.valid){
      //perform logic signUp
      console.log(this.signUpForm.value)
    }else{
     ValidateAllForm.validateAllFormFields(this.signUpForm)
      //login form cheking calidation


    }
  }
  
}
