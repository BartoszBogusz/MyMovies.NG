import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Disk } from 'src/app/Interfaces/Disk/disk.model';
import { HttpService } from 'src/services/http.service';

@Component({
  selector: 'app-details',
  templateUrl: './detailsDisk.component.html',
  styleUrls: ['./detailsDisk.component.css']
})
export class DetailsDiskComponent implements OnInit {

  public disk: Disk;
  public id: number = 0;

  constructor(private httpService: HttpService, private activatedRoute: ActivatedRoute) { 
    this.disk = {
    id: 0,
    name: ''
    };
  }
  
  ngOnInit(): void {
    this.id = JSON.parse(this.getId || '{}'); 
    this.getDisk();
  }

  public getDisk = () => {
    let route: string = 'https://localhost:7294/api/disk';
    this.httpService.getDataById(route, this.id)
    .subscribe((result) => {      
        this.disk = result as Disk;        
      },
        (error) => {
          console.error(error);
        });     
  }

  public get getId() {
    return this.activatedRoute.snapshot.paramMap.get('id');
  }

}
