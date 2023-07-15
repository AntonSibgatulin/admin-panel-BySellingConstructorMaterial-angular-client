import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  Router,
  RouterStateSnapshot,
  UrlTree
} from "@angular/router";
import {Observable, of} from "rxjs";
import {Injectable} from "@angular/core";
import {TokenService} from "../service/token.service";

@Injectable({providedIn:"root"})
export class AuthGuard implements CanActivate,CanActivateChild{
  constructor(private token:TokenService,
              private router:Router) {
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.token.checkAuth()){
      return of(true);
    }else{
        this.router.navigate(["/login"],{
          queryParams:{
            accessDenied: true
          }
        })
      return of(false)
    }
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.canActivate(childRoute,state);
  }

}
