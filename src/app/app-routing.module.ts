import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectivesComponent } from './directives/directives.component';

const routes: Routes = [
  // default routing
  {path:'',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent,children:[
    // child routing
    {path:'home',component:HomeComponent},
    {path:'gallery',component:GalleryComponent},
    {path:'data-binding',component:DataBindingComponent},
    {path:'directives',component:DirectivesComponent},
  ]},//parent routing
  
  {path:'**',component:ErrorComponent},//wildcard/error routing
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
