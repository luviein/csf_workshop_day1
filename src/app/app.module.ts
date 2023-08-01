import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SelectPaneComponent } from './select-pane/select-pane.component';
import { CartPaneComponent } from './cart-pane/cart-pane.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectPaneComponent,
    CartPaneComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
