import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  entryComponents: [AppComponent, HelloComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    customElements.define('app-root', createCustomElement(AppComponent, { injector: this.injector }));
    customElements.define('app-hello', createCustomElement(HelloComponent, { injector: this.injector }));
  }

  ngDoBootstrap() { }
}
