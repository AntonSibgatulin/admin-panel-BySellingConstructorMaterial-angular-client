import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ShopService} from "../../service/shop.service";
import {Router} from "@angular/router";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Shop} from "../../interfaces/ShopInterfaces";


@Component({
  selector: 'app-create-shop',
  templateUrl: './create-shop.component.html',
  styleUrls: ['./create-shop.component.css']
})
export class CreateShopComponent implements OnInit, OnDestroy {
  sub!: Subscription
  form!: FormGroup

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private shopService: ShopService,
              private router: Router,
              private dialogRef: MatDialogRef<CreateShopComponent>) {

  }

  ngOnDestroy(): void {
    if (this.sub != null) {
      this.sub.unsubscribe()
    }
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      description: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      phone: new FormControl(null, [Validators.required, Validators.minLength(10)]),
      workEmail: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      address: new FormControl(null, [Validators.required, Validators.minLength(3)])

    })
    if (this.data != null) {
      let d = this.data as Shop
      this.form.get("name")?.setValue(d.name)
      this.form.get("description")?.setValue(d.description)
      this.form.get("phone")?.setValue(d.phone)
      this.form.get("workEmail")?.setValue(d.workEmail)
      this.form.get("address")?.setValue(d.address)
    }
  }


  onSubmit() {
    if (this.data == null) {
      this.sub = this.shopService.createNewShop(this.form.value).subscribe((data) => {
        console.log(data)
        this.onClose()
        window.location.reload()
      })
    }else{
      this.sub = this.shopService.edit(this.form.value).subscribe((data) => {
        console.log(data)
        this.onClose()
        window.location.reload()
      })
    }
  }

  onClose() {
    this.dialogRef.close()
  }
  reload(){

    this.router.navigateByUrl('/RefreshComponent', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/home/shops']);
    });
  }

}
