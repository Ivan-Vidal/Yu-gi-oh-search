import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Register } from '../models/register'
import { Router } from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  mostrarMenuEmitter = new EventEmitter<boolean>();
  obj: object;
  json;
  
  constructor(
    private http: HttpClient, 
    private router: Router) { }

  login(register: Register){
    this.http.post<Register>('http://52.91.139.190/fsapi/users/auth/register-jwt', register, httpOptions).subscribe(
      obj => {
        console.log('Cadastrado com sucesso !');
        this.router.navigateByUrl('/login');
       
      },
      error => {
        console.log('erro ao logar');
      },
      ()=> console.log('Finalizado request')
    );  
  }
} 