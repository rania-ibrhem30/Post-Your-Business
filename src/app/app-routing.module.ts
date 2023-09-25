import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components-shared/home/home.component';
import { FooterComponent } from './Components-shared/footer/footer.component';
import { NavbarComponent } from './Components-shared/navbar/navbar.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const routes: Routes = [
  { path: '', component:HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'navbar', component: NavbarComponent },
   {path:'Contact',component:ContactUsComponent},
  { path: 'Listings', loadChildren: () => import('./listings/listings.module').then(m => m.ListingsModule) },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
