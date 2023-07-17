import {Injectable} from "@angular/core";
import {Router} from "@angular/router";

@Injectable({providedIn: "root"})
export class TokenService {
  private token!:string
  constructor(private router:Router) {
  }

  saveToken(token: string) {
    localStorage.setItem("user.token", token)
  }

  exit() {
    localStorage.clear()
  }

  getToken() {
    if(this.token == null){
      this.token = localStorage.getItem("user.token") || "NULL"
      if(this.token == "NULL"){
        this.exit()
        this.router.navigate(['/main'])
      }
    }
    return this.token
  }

  checkAuth() {
    return localStorage.getItem("user.token") != null
  }

  getStartTokenLink(){
    return "?token="+this.getToken()
  }

  saveUser(adminString: string) {
    localStorage.setItem("user",adminString)

  }
  getUserEmail(){
    let data = localStorage.getItem("user") || ""
    if(data.length == 0){
      this.exit()
      this.router.navigate(['/main'])
      return null;
    }

    return JSON.parse(data).email
  }
}
