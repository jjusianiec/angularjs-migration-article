import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {UpgradeModule} from '@angular/upgrade/static';
import {AngularHomeComponent} from './angular-home/angular-home.component';
import moduleName from '../angularjs/descriptor';

@NgModule({
  declarations: [
    AppComponent,
    AngularHomeComponent,
  ],
  imports: [
    BrowserModule,
    UpgradeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private upgrade: UpgradeModule) {
    this.upgrade.bootstrap(document.getElementById('angularjsContainer'), [moduleName]);
  }
}
