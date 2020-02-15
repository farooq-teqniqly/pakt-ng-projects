import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DemoUiModule } from '@teqniqly/demo-ui';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, DemoUiModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
