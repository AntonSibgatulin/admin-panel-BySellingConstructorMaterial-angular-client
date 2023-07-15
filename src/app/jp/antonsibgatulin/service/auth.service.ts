import {Injectable, NgModule} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {LoginSuccessRespone} from "../interfaces/LoginRespone";

@Injectable({
  providedIn: "root"
})
export class AuthService {


  constructor(private http: HttpClient) {
  }

  login(logIn: LogIn): Observable<any> {

    return this.http.get("/api/auth/login?email=" + logIn.email + "&password=" + logIn.password);

  }

}

export interface LogIn {
  email: String,
  password: String
}
