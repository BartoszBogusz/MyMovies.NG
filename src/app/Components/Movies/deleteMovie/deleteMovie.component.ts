import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/services/http.service';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-delete',
  templateUrl: './deleteMovie.component.html',
  styleUrls: ['./deleteMovie.component.css']
})
export class DeleteMovieComponent implements OnInit {

  id: number = 0;
  deleted = false;

  constructor(private httpService: HttpService, private activatedRoute: ActivatedRoute) {  }

  ngOnInit(): void {
    this.id = JSON.parse(this.getId || '{}');
  }

  public deleteMovie = () => {
    let route: string = 'https://localhost:7294/api/movie';
    this.httpService.deleteData(route, this.id)
      .subscribe((result) => {
        console.log(result);      
      },
        (error) => {
          console.error(error);
        });
      }
  
  public get getId() {
    return this.activatedRoute.snapshot.paramMap.get('id');
  }

  onDelete() {
    this.deleteMovie();
    this.deleted = true;
  }
}