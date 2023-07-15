import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {FormControl, FormGroup, Validator, Validators} from "@angular/forms";
import {AuthService} from "../../service/auth.service";
import {LoginSuccessRespone, LoginUnSeccessRespone} from "../../interfaces/LoginRespone";
import {TokenService} from "../../service/token.service";
import {ActivatedRoute, Params, Route, Router} from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  form!: FormGroup
  sub!: Subscription

  constructor(private authService: AuthService,
              private tokenService: TokenService,
              private router: Router,
              private activateRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.email, Validators.required]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)])
    });
    this.activateRoute.queryParams.subscribe((params:Params)=>{
      if(params['accessDenied']){
        //you should log in
      }
    })
  }

  ngOnDestroy() {
    if (this.sub != null) {
      this.sub.unsubscribe()
    }
  }

  login() {

  }

  onSubmit() {
    this.form.disable()
    this.sub = this.authService.login(this.form.value).subscribe((data) => {
      if (data.error != null) {
        alert("Invalid email or password")
        this.form.enable()
      } else {
        this.tokenService.saveToken(data.object.token as string)

       // this.router.navigate(["/home"])

        }

    })
  }
}
