import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {MainComponent} from "./jp/antonsibgatulin/main/main.component";
import {AuthLayoutComponent} from "./jp/antonsibgatulin/layouts/auth-layout/auth-layout.component";
import {LoginComponent} from "./jp/antonsibgatulin/layout-components/login/login.component";
import {HomeLayoutComponent} from "./jp/antonsibgatulin/layouts/home-layout/home-layout.component";
import {AuthGuard} from "./jp/antonsibgatulin/guards/AuthGuard";
import {DashboardComponent} from "./jp/antonsibgatulin/home/dashboard/dashboard.component";


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
        path: '',redirectTo:'/home/dashboard',pathMatch:"full"
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
