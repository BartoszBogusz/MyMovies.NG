import { Component } from '@angular/core';
import { Movie } from 'src/app/Interfaces/Movie/movie.model';
import { HttpService } from 'src/services/http.service';
import { MovieQuery } from 'src/app/Interfaces/Movie/movieQuery.model';
import { PaginedMovies } from 'src/app/Interfaces/Movie/paginedMovies.model';

@Component({
  selector: 'app-overview',
  templateUrl: './overviewMovie.component.html',
  styleUrls: ['./overviewMovie.component.css']
})
export class OverviewMovieComponent {
  
  currentMovie: Movie;
  currentIndex = -1;
  title = '';
  route = 'https://localhost:7294/api/movie';
  movies: PaginedMovies;
  movieQuery: MovieQuery;
  pageSizes = [5, 10, 15]
  
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
    this.getMovies();   
  } 

  public getMovies = () => {
    const query = this.movieQuery;
    this.httpService.getData(this.route, query)
    .subscribe((result) => {      
        this.movies = result as PaginedMovies;       
      },
        (error) => {
          console.error(error);
        });     
  }

  setActiveMovie(movie: Movie, index: number): void {
    this.currentMovie = movie;
    this.currentIndex = index;
  }

  handlePageChange(event: number): void {
    this.movieQuery.pageNumber = event;
    this.getMovies();
  }

  handlePageSizeChange(event: any): void {
    this.movieQuery.pageSize = event.target.value;
    this.movieQuery.pageNumber = 1;
    this.getMovies();
  }

  searchTitle(): void {
    this.movieQuery.pageNumber = 1;
    this.getMovies();
  }

  sort(sortBy: string): void {
    this.movieQuery.sortBy = sortBy;

    switch(this.movieQuery.sortDirection) { 
      case 'ASC': { 
        this.movieQuery.sortDirection ='DESC';
         break; 
      }
      case 'DESC': { 
        this.movieQuery.sortDirection ='ASC';
         break; 
      }  
      default: {
         break; 
      } 
    }
    this.getMovies();
  }

  onEnter() : void {
    this.getMovies();
  }

}
