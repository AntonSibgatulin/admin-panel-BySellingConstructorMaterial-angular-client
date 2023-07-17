import {Injectable} from "@angular/core";
import {TokenService} from "./token.service";
import {HttpClient} from "@angular/common/http";

@Injectable({providedIn:"root"})
export class ItemService{

  constructor(private tokenService:TokenService,private http:HttpClient) {

  }

}
