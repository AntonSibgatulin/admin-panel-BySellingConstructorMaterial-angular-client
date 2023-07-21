import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {TokenService} from "../../service/token.service";
import {ShopService} from "../../service/shop.service";
import {ItemService} from "../../service/item.service";
import {async, Observable} from "rxjs";
import {Shop} from "../../interfaces/ShopInterfaces";
import {FormControl, FormGroup, Validators} from "@angular/forms";

import * as $ from 'jquery'
import {ShopItems} from "../../interfaces/ShopItems";


@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild("panelCreate") panelCreate!: ElementRef
  panelCreateOpened = false
  id:Number = -1
  viewInited = false
  shops$!: Observable<Shop[]>
  form!: FormGroup
  formSearch!: FormGroup
  formCreateItem!: FormGroup;

  items$!:Observable<ShopItems[]>


  constructor(private itemService: ItemService,
              private shopService: ShopService,
  ) {
  }


  ngOnDestroy(): void {
  }

  ngOnInit(): void {
    this.shops$ = this.shopService.getAllMyShops()

    this.form = new FormGroup({
      name: new FormControl(null)
    })

    this.formSearch = new FormGroup({
      search: new FormControl(null)
    })

    this.formCreateItem = new FormGroup({
      name: new FormControl(null, [Validators.maxLength(150)]),
      price: new FormControl(null),
      pricePurchase: new FormControl(null),
      count: new FormControl(null),
      description: new FormControl(null, [Validators.required, Validators.minLength(150)]),
      discount: new FormControl(null),
      discount_price: new FormControl(null),
      discount_percent: new FormControl(null),
      image: new FormControl(null)

    })


    this.shops$.subscribe((d:Shop[])=>{
      if(d.length>0) {
        this.id = d[0].id;
        this.items$ = this.itemService.getAllMyItems(this.id)
      }
    })




  }


  change($event: Event) {
    // @ts-ignore
    this.id = $event.target?.value

  }

  createCategory() {


  }

  search() {

  }

  createItem() {

      this.itemService.create(this.formCreateItem.value,this.id)
  }

  ngAfterViewInit(): void {
    this.viewInited = true
  }

  showOrHide() {
    if (this.viewInited == false) return;
    if (this.panelCreateOpened == false) {

      $(this.panelCreate.nativeElement).slideDown(500);
    } else {
      $(this.panelCreate.nativeElement).slideUp(500);

    }
    this.panelCreateOpened = !this.panelCreateOpened
  }



}
