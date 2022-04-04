import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Disk } from 'src/app/Interfaces/Disk/disk.model';
import { EditDisk } from 'src/app/Interfaces/Disk/editDisk.model';
import { HttpService } from 'src/services/http.service';

@Component({
  selector: 'app-update',
  templateUrl: './updateDisk.component.html',
  styleUrls: ['./updateDisk.component.css']
})
export class UpdateDiskComponent implements OnInit {

  id: number = 0;
  disk: Disk;
  editedDisk: EditDisk = {
    id:0, 
    name:""
  };

  constructor(private httpService: HttpService, private activatedRoute: ActivatedRoute,  private route: Router) { }

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

  public updateDisk = () => {
    let route: string = 'https://localhost:7294/api/disk';
    this.httpService.updateData(route, this.id, this.editedDisk)
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
    this.editedDisk.id = this.disk.id;
    this.editedDisk.name = this.disk.name; 
    this.updateDisk();
    this.route.navigate(['disks']);
  }
}