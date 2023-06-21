import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ViewAllComponent } from './view-all/view-all.component';
import { RegisterComponent } from './register/register.component';
import { ViewComponent } from './view/view.component';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchPipe } from './search.pipe';
import { AddComponent } from './add/add.component';
import { ShowComponent } from './show/show.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ViewAllComponent,
    RegisterComponent,
    ViewComponent,
    SearchPipe,
    AddComponent,
    ShowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
