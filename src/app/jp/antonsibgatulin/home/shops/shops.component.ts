import {Component, OnDestroy, OnInit} from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {CreateShopComponent} from "../../func/create-shop/create-shop.component";
import {Observable, Subscription} from "rxjs";
import {Shop} from "../../interfaces/ShopInterfaces";
import {ShopService} from "../../service/shop.service";

@Component({
  selector: 'app-shops',
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.css']
})
export class ShopsComponent implements OnInit, OnDestroy {

  shops$!:Observable<Shop[]>
  JSON = JSON;
  sub!:Subscription

  constructor(private dialog: MatDialog,private shopService:ShopService) {
  }

  ngOnDestroy(): void {
    if(this.sub!=null){
      this.sub.unsubscribe()
    }
  }

  ngOnInit(): void {
    this.shops$ = this.shopService.getAllMyShops()
  }

  createNewShop() {
    const dialogConfig = new MatDialogConfig()
    dialogConfig.disableClose = false
    dialogConfig.autoFocus = true
    dialogConfig.width = "70%"
    dialogConfig.minWidth = "350px"
    dialogConfig.maxWidth = "600px"
    dialogConfig.height = "auto"

    this.dialog.open(CreateShopComponent, dialogConfig)
  }

  editShop(shop:Shop){
    const dialogConfig = new MatDialogConfig()
    dialogConfig.disableClose = false
    dialogConfig.autoFocus = true
    dialogConfig.width = "70%"
    dialogConfig.minWidth = "350px"
    dialogConfig.maxWidth = "600px"
    dialogConfig.height = "auto"
    dialogConfig.data = shop

    this.dialog.open(CreateShopComponent, dialogConfig)
  }

  Number(profit: any) {
    return Number(profit)
  }

  getDate(timeCreate: any) {
    var date = new Date(Number(timeCreate))
    return date.toTimeString()
  }

  onDelete(id:any){
    this.sub = this.shopService.delete(Number(id)).subscribe(()=>{

      this.ngOnInit();
    })

  }
}
