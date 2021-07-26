import { Component, OnInit } from '@angular/core';
import {ItemsService} from '../core/service/items.service';
import {Items} from '../core/models/items';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {
  coco: any = ['coco', 'pepe'];
  items: Items[] = [];

  constructor(
    private itemsService: ItemsService
  ) { }

  ngOnInit(): void {
    this.fetchItems();
  }
  // tslint:disable-next-line:typedef
  fetchItems(){
    this.itemsService.getAllItems()
      .subscribe(items => {
        console.log(items);
        this.items = items;
      });
  }

  createItem(): any {
    const newItem: Items = {
      description : 'hola sou yo',
      checked :  true
    };

    this.itemsService.createItem(newItem)
      .subscribe(item => {
        console.log(item);
      });
  }
}
