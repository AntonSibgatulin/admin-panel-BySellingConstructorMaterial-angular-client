import {Component, OnDestroy, OnInit} from '@angular/core';
import {TokenService} from "../../service/token.service";
import {ShopService} from "../../service/shop.service";
import {ItemService} from "../../service/item.service";

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit,OnDestroy{

  constructor(private itemService:ItemService,
              private shopService:ShopService,
              ) {
  }
  ngOnDestroy(): void {
  }

  ngOnInit(): void {
  }

}
