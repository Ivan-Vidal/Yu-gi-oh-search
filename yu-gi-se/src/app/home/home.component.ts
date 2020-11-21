import { HomeService } from './../service/home.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  card_info: any[] = [];
  show = true;
  queryField = new FormControl();

  
  readonly search_url = 'https://api.themoviedb.org/3/search/movie?api_key=9b273ba750e866b6a1e47e83f0a758fe';
  
  results$: Observable<any>;
  
  total: number;
  
  constructor(private http: HttpClient, private homeS: HomeService,private fb: FormBuilder,  private router: Router ,private route: ActivatedRoute ) { }
  
  ngOnInit(): void {
    this.getCards()
  }
  
  getCards() {
    this.homeS.getCards().subscribe((obj:any) => {
      if(!obj.data) return console.log('error');
      this.card_info = (obj.data); 
     console.log('atualizando...',  this.card_info);
    },
    (error =>{
      console.log(error, 'deu erro')

    }));
  }
  onEdit(id) {
    this.router.navigate(['details', id]); 
  }
  
  onSearch(){
    this.show = !this.show;
    console.log(this.queryField.value)
    
    this.results$ = this.http.get(this.search_url + '&query=' + this.queryField.value).pipe(
      tap((res:any) => this.total = res.total_results),
      map((res:any) =>  res.results)
      )
      console.log(this.results$)
      
    }
    
    
  }
