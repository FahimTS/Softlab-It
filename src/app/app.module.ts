import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavberMenuComponent } from './navber-menu/navber-menu.component';
import { HomeComponent } from './pages/home/home.component';
import { BusinessCardComponent } from './business-card/business-card.component';
import { ClientCardComponent } from './client-card/client-card.component';
import { RecognitionCardComponent } from './recognition-card/recognition-card.component';
import { AwardComponent } from './award/award.component';
import { ShceduleComponent } from './shcedule/shcedule.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {NgIf} from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { UserFormComponent } from './user-form/user-form.component';
import { CasesComponent } from './pages/cases/cases.component';
import { ServicesComponent } from './pages/services/services.component';
import { OffersComponent } from './pages/offers/offers.component';
import { BlogComponent } from './pages/blog/blog.component';
import { AboutComponent } from './pages/about/about.component';
import { OurProjectComponent } from './our-project/our-project.component';
import { CasedComponent } from './cased/cased.component';
import { TechnologyComponent } from './technology/technology.component';
import { TechnologiesComponent } from './pages/technologies/technologies.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ResponsiveComponent } from './responsive/responsive.component';




@NgModule({
  declarations: [
    AppComponent,
    NavberMenuComponent,
    HomeComponent,
    BusinessCardComponent,
    ClientCardComponent,
    RecognitionCardComponent,
    AwardComponent,
    ShceduleComponent,
    UserFormComponent,
    CasesComponent,
    ServicesComponent,
    OffersComponent,
    BlogComponent,
    AboutComponent,
    OurProjectComponent,
    CasedComponent,
    TechnologyComponent,
    TechnologiesComponent,
    BlogPostComponent,
    CarouselComponent,
    ResponsiveComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    NgIf,
    MatInputModule,
    MatIconModule,
    FormsModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
