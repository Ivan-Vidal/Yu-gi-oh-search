import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/User'
import { Router } from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  mostrarMenuEmitter = new EventEmitter<boolean>();
  obj: object;
  userInfo: User;
  json;
  
  constructor(
    private http: HttpClient, 
    private router: Router) { }

  login(user: User){
    this.http.post<User>('http://52.91.139.190/fsapi/users/login', user, httpOptions).subscribe(
      obj => {
        console.log('logou com sucesso');
        localStorage.setItem('userLogado', JSON.stringify(obj));
        this.router.navigateByUrl('/home');
       
      },
      error => {
        console.log('erro ao logar');
      }
    );  
  }
  usuarioLogado(): boolean {
    if(localStorage.getItem('userLogado')){
      return true;
    }
    return false;
  }
  logout(){
    localStorage.removeItem('userLogado')
    this.router.navigateByUrl('/login');
    console.log('Saindo...')
  }

  username(){
    this.json = localStorage.getItem('userLogado');
    let response = JSON.parse(this.json);
    console.log('nome do usuario: ' + response.user.name)  
  }
} 