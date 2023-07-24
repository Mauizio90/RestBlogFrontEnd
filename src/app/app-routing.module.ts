import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingleCategoryComponent } from './components/pages/single-category/single-category.component';
import { SinglePostComponent } from './components/pages/single-post/single-post.component';
import { AboutUsComponent } from './components/pages/about-us/about-us.component';
import { TermsAndConditionComponent } from './components/pages/terms-and-condition/terms-and-condition.component';
import { ContactUsComponent } from './components/pages/contact-us/contact-us.component';
import { HomeComponent } from './components/pages/home/home.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'category/:categoryName', component: SingleCategoryComponent},
  {path: 'post', component: SinglePostComponent},

  {path: 'about', component: AboutUsComponent},
  {path: 'term-conditions', component: TermsAndConditionComponent},
  {path: 'contact', component: ContactUsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
