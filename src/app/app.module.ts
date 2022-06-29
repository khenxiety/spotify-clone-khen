import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { BottombarComponent } from './components/bottombar/bottombar.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { MobileSidebarComponent } from './components/sidebar/mobile-sidebar/mobile-sidebar.component';
import { LibraryComponent } from './pages/library/library.component';
import { SplashScreenComponent } from './components/splash-screen/splash-screen.component';
import { BottombarMobileComponent } from './components/bottombar-mobile/bottombar-mobile.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SidebarComponent,
    BottombarComponent,
    HomeComponent,
    SearchComponent,
    MobileSidebarComponent,
    LibraryComponent,
    SplashScreenComponent,
    BottombarMobileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
