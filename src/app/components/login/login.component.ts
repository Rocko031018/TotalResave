import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import ValidateAllForm from 'src/app/helpers/validateform';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


type: string="password";
isText:boolean=false;
eyeIcon:string = "fa-eye-slash"
loginForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  hideShowPass(){
this.isText = !this.isText;
this.isText ? this.eyeIcon="fa-eye" : this.eyeIcon = "fa-eye-slash";
this.isText ? this.type = "text" : this.type = "password";
  }

  onSumit(){
    if(this.loginForm.valid){
      //Send obj to database
      console.log(this.loginForm.value)
    }else{
      

      ValidateAllForm.validateAllFormFields(this.loginForm);
      alert("your form is invalid")
      //throw the error using toaster and with required fields
    }
  }


  //validacion de campos en el login cuadro google al hacer clisk en el boton



}
