import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Items} from '../models/items';
@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(
    private http: HttpClient
  ) { }

  // tslint:disable-next-line:typedef
  getAllItems(){
    return this.http.get<Items[]>('http://localhost:3000');
  }
  // tslint:disable-next-line:typedef
  getItem(id: string){
    return this.http.get<Items>(`http://localhost:3000/items${id}`);
  }
  // tslint:disable-next-line:typedef
  createItem(item: Items){
    return this.http.post('http://localhost:3000', item);
  }
}
