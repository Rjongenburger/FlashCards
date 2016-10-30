import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NavigationComponent } from './components/navigation/navigation.component';
import { AppComponent }  from './app.component';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [
      AppComponent,
      NavigationComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
