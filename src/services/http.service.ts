import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieQuery } from '../app/Interfaces/Movie/movieQuery.model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpService: HttpClient)  { }

  public getData = (route: string, query: MovieQuery) => {
    return this.httpService.get(`${route}?searchPhrase=${query.searchPhrase}&pageNumber=${query.pageNumber}&pageSize=${query.pageSize}&sortBy=${query.sortBy}&sortDirection=${query.sortDirection}`);
  }

  public getAll = (route: string) => {
    return this.httpService.get(route + "/all");
  }

  public getDataById = (route: string, id: number) => {
    return this.httpService.get(route + '/' + id);
  }

  public addData = (route: string, body: any) => {
    return this.httpService.post(route, body);
  }

  public updateData = (route: string, id: number, body: any) => {
    return this.httpService.put(route + '/' + id, body);
  }

  // public deleteData = (route: string, id: number) => {
  //   return this.httpService.delete(route + '/' + id);
  // }

  public deleteData = (route: string, id: number) => {
    return this.httpService.delete(`${route}/${id}`);
  }
}
