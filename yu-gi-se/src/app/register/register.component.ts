import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../service/register.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 
  loginForm: FormGroup;
  submit: boolean = false;

  constructor(private _register: RegisterService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      'name': ['', Validators.required], 
      'email': ['',Validators.required ],
      'password': ['', Validators.required],
      'confirma_password': ['', Validators.required],
    });
  }

  register(){
    console.log('Cadastro em progresso')
    this.submit = true;
    this._register.login(this.loginForm.value);
  }

}