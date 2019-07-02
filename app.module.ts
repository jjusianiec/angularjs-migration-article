import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {UpgradeModule} from '@angular/upgrade/static';
import angularJsModuleName from '../angularjs/descriptor';


@NgModule({
  imports: [
    BrowserModule,
    UpgradeModule
  ]
  // ...
  // bootstrap: [ ... ] <---- this must be removed!
})
export class AppModule {
  
  constructor(private upgradeModule: UpgradeModule) {
  }

  public ngDoBootstrap() {
    // Intialize the AngularJS Module
    this.upgradeModule.bootstrap(document.body, [angularJsModuleName], { strictDi: true });
  }
}
