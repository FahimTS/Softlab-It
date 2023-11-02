import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { CasesComponent } from './pages/cases/cases.component';
import { ServicesComponent } from './pages/services/services.component';
import { OffersComponent } from './pages/offers/offers.component';
import { BlogComponent } from './pages/blog/blog.component';
import { TechnologiesComponent } from './pages/technologies/technologies.component';


const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'about', component: AboutComponent},
  {path:'cases', component: CasesComponent},
  {path:'services', component: ServicesComponent},
  {path: 'technologies', component: TechnologiesComponent},
  {path:'offers', component: OffersComponent},
  {path:'blog', component: BlogComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
