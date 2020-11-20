import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';
import { FormGroup, FormBuilder, Validators  } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  loginForm: FormGroup;
  submit: boolean;

  constructor(private _LoginService: LoginService, private fb: FormBuilder) { }

  ngOnInit(): void {

    this.submit = false;
    
    this.loginForm = this.fb.group({
      'email': ['', Validators.required],
      'password': ['', Validators.required],
    });
  }

  login(){
    console.log('login em progresso...')
    this.submit = true;
    this._LoginService.login(this.loginForm.value);
  }
}