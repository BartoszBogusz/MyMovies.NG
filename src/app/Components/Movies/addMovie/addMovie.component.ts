import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../../services/http.service';
import { AddMovie } from 'src/app/Interfaces/Movie/addMovie.model';
import { Disk } from 'src/app/Interfaces/Disk/disk.model';

@Component({
  selector: 'app-add',
  templateUrl: './addMovie.component.html',
  styleUrls: ['./addMovie.component.css']
})
 export class AddMovieComponent {

  newMovie: AddMovie;
  disks: Disk[] = [];
  submitted = false;

  constructor(private httpService: HttpService) { 
    this.newMovie = {
      title: "",
      diskId: 0
      }
    };

  ngOnInit() {
    this.getDisks();    
  } 

  public addMovie = () => {
    let route: string = 'https://localhost:7294/api/movie';
    this.httpService.addData(route, this.newMovie)
      .subscribe((result) => {
        this.submitted = true;
      },
        (error) => {
          console.error(error);
        });
  }

  public getDisks = () => {
    let route: string = 'https://localhost:7294/api/Disk';
    this.httpService.getAll(route)
    .subscribe((result) => {      
        this.disks = result as Disk[];   
      },
        (error) => {
          console.error(error);
        });     
  }

  addNewMovie(): void {
    this.submitted = false;
    this.newMovie = {
      title: "",
      diskId: 0
      }
  }

  onSubmit() {
    this.addMovie();
  }
  
}