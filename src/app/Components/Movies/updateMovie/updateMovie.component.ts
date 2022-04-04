import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Disk } from 'src/app/Interfaces/Disk/disk.model';
import { EditMovie } from 'src/app/Interfaces/Movie/editMovie.model';
import { Movie } from 'src/app/Interfaces/Movie/movie.model';
import { HttpService } from 'src/services/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './updateMovie.component.html',
  styleUrls: ['./updateMovie.component.css']
})
export class UpdateMovieComponent implements OnInit {

  id: number = 0;
  movie: Movie;
  disks: Disk[] = [];
  editedMovie: EditMovie = {
    id:0, 
    title:"", 
    isWatched: false,
    diskId:0
  };

  constructor(private httpService: HttpService, private activatedRoute: ActivatedRoute,  private route: Router) { }

  ngOnInit(): void {
    this.id = JSON.parse(this.getId || '{}'); 
    this.getMovie()
    this.getDisks(); 
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

  public updateMovie = () => {
    let route: string = 'https://localhost:7294/api/movie';
    this.httpService.updateData(route, this.id, this.editedMovie)
      .subscribe((result) => {
      },
        (error) => {
          console.error(error);
        });
  }

  public get getId() {
    return this.activatedRoute.snapshot.paramMap.get('id');
  }

  onUpdate() {
    this.editedMovie.id = this.movie.id;
    this.editedMovie.title = this.movie.title;
    this.editedMovie.diskId = this.movie.disk.id;
    this.editedMovie.isWatched = this.movie.isWatched;    
    this.updateMovie();
    this.route.navigate(['movies']);
  }
}