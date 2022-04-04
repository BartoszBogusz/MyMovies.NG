import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/services/http.service';

@Component({
  selector: 'app-delete',
  templateUrl: './deleteDisk.component.html',
  styleUrls: ['./deleteDisk.component.css']
})
export class DeleteDiskComponent implements OnInit {

  id: number = 0;
  deleted = false;

  constructor(private httpService: HttpService, private activatedRoute: ActivatedRoute) {  }

  ngOnInit(): void {
    this.id = JSON.parse(this.getId || '{}');
  }

  public deleteDisk = () => {
    let route: string = 'https://localhost:7294/api/disk';
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
    this.deleteDisk();
    this.deleted = true;
  }

}
