import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LibraryComponent } from './pages/library/library.component';
import { SearchComponent } from './pages/search/search.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'search',
    component:SearchComponent
  },
  {
    path:'library',
    component:LibraryComponent
  },
  {
    path:'**',
    pathMatch:'full',
    redirectTo:'home'
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
