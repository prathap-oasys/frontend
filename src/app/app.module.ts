import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { GetAllComponent } from './get-all/get-all.component';
import { RouterModule } from '@angular/router';
import { GetByIdComponent } from './get-by-id/get-by-id.component';
import { UpdateOneComponent } from './update-one/update-one.component';
import { DeleteOneComponent } from './delete-one/delete-one.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    GetAllComponent,
    GetByIdComponent,
    UpdateOneComponent,
    DeleteOneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
