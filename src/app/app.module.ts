import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  entryComponents: [AppComponent, HelloComponent, FormComponent]
})
export class AppModule {
  constructor(public injector: Injector) { }
  ngDoBootstrap() {
    customElements.define('app-hello', createCustomElement(HelloComponent, { injector: this.injector }));
    customElements.define('app-form', createCustomElement(FormComponent, { injector: this.injector }));
  }
}
