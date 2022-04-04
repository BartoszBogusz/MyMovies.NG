import { Component, OnInit } from '@angular/core';
import { Disk } from 'src/app/Interfaces/Disk/disk.model';
import { MovieQuery } from 'src/app/Interfaces/Movie/movieQuery.model';
import { PaginedMovies } from 'src/app/Interfaces/Movie/paginedMovies.model';
import { HttpService } from 'src/services/http.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './mainPage.component.html',
  styleUrls: ['./mainPage.component.css']
})
export class MainPageComponent implements OnInit {

  movies: PaginedMovies;
  movieQuery: MovieQuery;
  disks: Disk[];

  constructor(private httpService: HttpService) { 
    this.movieQuery = {
      searchPhrase: '',
      pageNumber: 1,
      pageSize: 5,
      sortBy:'',
      sortDirection:'DESC'
    }

    this.movies = {
      items: [],
      itemsFrom: 0,
      itemsTo: 0,
      totalItemsCount: 0,
      totalPages: 0
    }
  }

  ngOnInit(){
    console.log(this.movieQuery);
    this.getMovies();
    this.getDisks();
  } 

  public getMovies = () => {
    let route: string = 'https://localhost:7294/api/movie';
    this.httpService.getData(route,this.movieQuery)
    .subscribe((result) => {      
        this.movies = result as PaginedMovies;  
        console.log("Filmy:");
        console.log(this.movies);
        console.log("Zapytanie:");
        console.log(this.movieQuery);
      },
        (error) => {
          console.error(error);
        });     
  }

  public getDisks = () => {
    let route: string = 'https://localhost:7294/api/disk';
    this.httpService.getAll(route)
    .subscribe((result) => {      
        this.disks = result as Disk[];     
      },
        (error) => {
          console.error(error);
        });     
  }
}
