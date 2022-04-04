import { Component, OnInit } from '@angular/core';
import { AddDisk } from 'src/app/Interfaces/Disk/addDisk.model';
import { HttpService } from 'src/services/http.service';

@Component({
  selector: 'app-add',
  templateUrl: './addDisk.component.html',
  styleUrls: ['./addDisk.component.css']
})
export class AddDiskComponent implements OnInit {

  newDisk: AddDisk = {name:''};
  submitted = false;

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
  }

  public addDisk = () => {
    let route: string = 'https://localhost:7294/api/disk';
    this.httpService.addData(route, this.newDisk)
      .subscribe((result) => {
        this.submitted = true;
      },
        (error) => {
          console.error(error);
        });
  }

  addNewDisk(): void {
    this.submitted = false;
    this.newDisk = {
      name: ""
      }
  }

  onSubmit() {
    this.addDisk();
  }

}
