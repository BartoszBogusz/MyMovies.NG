import { Component, OnInit } from '@angular/core';
import { Disk } from 'src/app/Interfaces/Disk/disk.model';
import { HttpService } from 'src/services/http.service';
import { DiskQuery } from 'src/app/Interfaces/Disk/diskQuery.model';
import { PaginedDisks } from 'src/app/Interfaces/Disk/paginedDisks.model';

@Component({
  selector: 'app-overview',
  templateUrl: './overviewDisk.component.html',
  styleUrls: ['./overviewDisk.component.css']
})
export class OverviewDiskComponent  {

  currentDisk: Disk;
  currentIndex = -1;
  name = '';
  route: string = 'https://localhost:7294/api/disk';
  disks: PaginedDisks;
  diskQuery: DiskQuery;
  pageSizes = [5, 10, 15]

  constructor(private httpService: HttpService) { 
    this.diskQuery = {
      searchPhrase: '',
      pageNumber: 1,
      pageSize: 5,
      sortBy:'',
      sortDirection:'DESC'
    }

    this.disks = {
      items: [],
      itemsFrom: 0,
      itemsTo: 0,
      totalItemsCount: 0,
      totalPages: 0
    }
  }

  ngOnInit(){
    this.getDisks();
  } 

  public getDisks = () => {
    const query = this.diskQuery;
    console.log("zapytanie");    
    console.log(query);
    this.httpService.getData(this.route, query)
    .subscribe((result) => {      
      this.disks = result as PaginedDisks; 
      console.log("wynik");    
      console.log(result); 
      },
        (error) => {
          console.error(error);
        });     
  }

  setActiveDisk(disk: Disk, index: number): void {
    this.currentDisk = disk;
    this.currentIndex = index;
  }

  handlePageChange(event: number): void {
    this.diskQuery.pageNumber = event;
    this.getDisks();
  }

  handlePageSizeChange(event: any): void {
    this.diskQuery.pageSize = event.target.value;
    this.diskQuery.pageNumber = 1;
    this.getDisks();
  }

  searchName(): void {
    this.diskQuery.pageNumber = 1;
    this.getDisks();
  }

  sort(sortBy: string): void {
    this.diskQuery.sortBy = sortBy;

    switch(this.diskQuery.sortDirection) { 
      case 'ASC': { 
        this.diskQuery.sortDirection ='DESC';
         break; 
      }
      case 'DESC': { 
        this.diskQuery.sortDirection ='ASC';
         break; 
      }  
      default: {
         break; 
      } 
    }
    this.getDisks();
  }

  onEnter() : void {
    this.getDisks();
  }


}
