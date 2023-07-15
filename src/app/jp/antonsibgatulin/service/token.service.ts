import {Injectable} from "@angular/core";

@Injectable({providedIn: "root"})
export class TokenService {
  private token!:string
  constructor() {
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
    }
    return this.token
  }

  checkAuth() {
    return localStorage.getItem("user.token") != null
  }
}
