import {Component, OnDestroy, OnInit} from '@angular/core';
import {TokenService} from "../../service/token.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.css']
})
export class HomeLayoutComponent implements OnInit,OnDestroy{

  constructor(private token:TokenService,
              private router:Router) {
  }

  getToken():TokenService{
    return this.token
  }

  ngOnDestroy(): void {
  }

  ngOnInit(): void {
  }

  exit(){
    this.token.exit()
    this.router.navigate(['/'])
  }


}
