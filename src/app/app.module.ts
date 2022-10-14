import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextcomponentComponent } from './textcomponent/textcomponent.component';
import { ImagecomponentComponent } from './imagecomponent/imagecomponent.component';
import { EmpCompComponent } from './emp-comp/emp-comp.component';
import { FormComponantComponent } from './form-componant/form-componant.component';

@NgModule({
  declarations: [
    AppComponent, 
    TextcomponentComponent,
    ImagecomponentComponent,
    EmpCompComponent,
    FormComponantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
