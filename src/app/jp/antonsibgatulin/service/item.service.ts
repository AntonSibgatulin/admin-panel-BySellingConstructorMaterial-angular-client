import {Injectable} from "@angular/core";
import {TokenService} from "./token.service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ShopItems} from "../interfaces/ShopItems";

@Injectable({providedIn: "root"})
export class ItemService {

  constructor(private tokenService: TokenService, private http: HttpClient) {

  }

  create(value: any, shopId: Number) {

    value.shopId = shopId

    this.http.post("/api/items/create" + this.tokenService.getStartTokenLink(), value).subscribe((s) => {
      console.log(s)
    })
  }

  getAllMyItems(id: Number):Observable<ShopItems[]> {
    return this.http.get<ShopItems[]>("/api/items/getMyItems/"+id+this.tokenService.getStartTokenLink())
  }
}
