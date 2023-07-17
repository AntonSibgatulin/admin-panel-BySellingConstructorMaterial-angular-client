import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {MainComponent} from "./jp/antonsibgatulin/main/main.component";
import {AuthLayoutComponent} from "./jp/antonsibgatulin/layouts/auth-layout/auth-layout.component";
import {LoginComponent} from "./jp/antonsibgatulin/authentication/login/login.component";
import {HomeLayoutComponent} from "./jp/antonsibgatulin/layouts/home-layout/home-layout.component";
import {AuthGuard} from "./jp/antonsibgatulin/guards/AuthGuard";
import {DashboardComponent} from "./jp/antonsibgatulin/home/dashboard/dashboard.component";
import {ShopsComponent} from "./jp/antonsibgatulin/home/shops/shops.component";
import {ItemsComponent} from "./jp/antonsibgatulin/home/items/items.component";


const routes: Routes = [
  {
    path: '', redirectTo: "authentication",pathMatch:"full"
  },
  {
    path: 'main', component: MainComponent, children: []
  },
  {
    path: "authentication", component: AuthLayoutComponent, children: [
      {
        path: '', redirectTo: "login",pathMatch:"full"
      },
      {
        path: 'login', component: LoginComponent
      }
    ]
  },
  {
    path: "home", component:HomeLayoutComponent,canActivate:[AuthGuard],children:[
      {
        path: "dashboard",component:DashboardComponent
      },
      {
        path: '', redirectTo: '/home/dashboard', pathMatch: "full"
      },
      {
        path: "shops",component:ShopsComponent
      },
      {
        path: "items",component: ItemsComponent
      }
    ]
  }

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
