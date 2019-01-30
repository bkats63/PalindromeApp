import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
//import { CounterComponent } from './counter/counter.component';
//import { FetchDataComponent } from './fetch-data/fetch-data.component';

import { PallindromeListComponent } from './pallindrome-list/pallindrome-list.component';
import { AddPallindromeComponent } from './add-pallindrome/add-pallindrome.component';
import { PallindromeValidator } from './add-pallindrome/pallindrome.directive';
import { PallindromesService } from './pallindromes.service';






@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    //CounterComponent,
    //FetchDataComponent,
    PallindromeListComponent,
    AddPallindromeComponent,
    PallindromeValidator
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      //{ path: 'counter', component: CounterComponent },
      //{ path: 'fetch-data', component: FetchDataComponent },
      { path: 'add-pallindrome', component: AddPallindromeComponent },
      { path: 'pallindrome-list', component: PallindromeListComponent }
    ])
  ],
  providers: [
    PallindromesService
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
