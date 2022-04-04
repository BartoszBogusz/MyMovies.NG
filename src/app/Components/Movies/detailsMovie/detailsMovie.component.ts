import { ActivatedRoute } from "@angular/router";
import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/services/http.service';
import { Movie } from 'src/app/Interfaces/Movie/movie.model';

@Component({
  selector: 'app-details',
  templateUrl: './detailsMovie.component.html',
  styleUrls: ['./detailsMovie.component.css']
})
export class DetailsMovieComponent implements OnInit {

  public movie: Movie;
  public id: number = 0;

  constructor(private httpService: HttpService, private activatedRoute: ActivatedRoute) { 
    this.movie = {
      id: 0,
      title: "",
      lastModified: new Date(),
      isWatched: false,
      disk : {
        id: 0, 
        name:""}
    };
  }

  ngOnInit(): void {
    this.id = JSON.parse(this.getId || '{}'); 
    this.getMovie();
  }

  public getMovie = () => {
    let route: string = 'https://localhost:7294/api/movie';
    this.httpService.getDataById(route, this.id)
    .subscribe((result) => {      
        this.movie = result as Movie;        
      },
        (error) => {
          console.error(error);
        });     
  }

  public get getId() {
    return this.activatedRoute.snapshot.paramMap.get('id');
  }
}  