import {HttpClient} from "@angular/common/http";
import {TokenService} from "./token.service";
import {MatDialogConfig} from "@angular/material/dialog";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {Shop} from "../interfaces/ShopInterfaces";

@Injectable({providedIn:"root"})
export class ShopService {
  url = "/api/shops"

  constructor(private http: HttpClient, private token: TokenService) {
  }




  createNewShop(object: any): Observable<any> {
    return this.http.put(this.url+"/createShop" + this.token.getStartTokenLink(), object)
  }

  getAllMyShops():Observable<Shop[]>{
    return this.http.get<Shop[]>(this.url+"/getMyShops"+this.token.getStartTokenLink())
  }

  delete(number: number) {
    return this.http.delete(this.url+"/delete/"+number+this.token.getStartTokenLink())
  }

  edit(object: any) {

    return this.http.post(this.url+"/edit/"+object.id + this.token.getStartTokenLink(), object)

    }
}
