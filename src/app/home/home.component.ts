import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  trendingMovies:any;
  theatreMovies:any;
  popularMoives:any;

    constructor(private http:HttpClient,private router:Router){}


ngOnInit() {
  this.getTheatreMovies();
    this.getTrendingMovies();
    this.getpopularMovies();
    
}

getTrendingMovies(){
  this.http.get('http://localhost:4200/assets/data/trending-movies.json')
  .subscribe((movies)=>{
      this.trendingMovies=movies;
      console.log(this.trendingMovies);
  });
}

getTheatreMovies(){
  this.http.get('http://localhost:4200/assets/data/theatre-movies.json')
  .subscribe((movies)=>{
      this.theatreMovies=movies;
      console.log(this.theatreMovies);
  })
}

getpopularMovies(){
  this.http.get('http://localhost:4200/assets/data/popular-movies.json')
  .subscribe((movies)=>{
      this.popularMoives=movies;
      console.log(this.popularMoives);
  })
}


goToMovie(type:string,id:string){
  console.log(type);
this.router.navigate(['movies',type,id]);

}


  
}
