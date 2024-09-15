import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './Components/contact/contact.component';
import { HomeComponent } from './Components/home/home.component';
import { PortfolioComponent } from './Components/portfolio/portfolio.component';
import {EducationComponent} from "./Components/education/education.component";

const routes: Routes = [
  {
    path:"", component:HomeComponent
  },
  {path:"contact", component:ContactComponent},
  {path:"education", component:EducationComponent},
  {path:"portfolio", component:PortfolioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
