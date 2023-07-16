import { Component } from '@angular/core';
import {TokenService} from "./jp/antonsibgatulin/service/token.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'admin-panel';
  constructor(private tokenService:TokenService,private router:Router) {
    if(tokenService.checkAuth()){
     // router.navigate(['home'])
    }else{
      //router.navigate(['main'])
    }
  }



}
