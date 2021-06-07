import { FormOwnerComponent } from './components/form-owner/owners-add.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { ListOwnersComponent } from './list-owners/list-owners.component';

import { VetsComponent } from './components/vets/vets.component';
import { DetailOwnerComponent } from './components/detail-owner/detail-owner.component';
import { OwnerRestControllerComponent } from './components/owner-rest-controller/owner-rest-controller.component';




@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ListOwnersComponent,
    VetsComponent,
    HomeComponent,
    DetailOwnerComponent,
    OwnerRestControllerComponent,
    FormOwnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
