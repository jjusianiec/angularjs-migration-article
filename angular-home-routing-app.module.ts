...
import {AppComponent} from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {AngularHomeComponent} from './angular-home/angular-home.component';
...

const routes: Routes = [
  {
    path: '', children: [
      {path: 'angular-home', component: AngularHomeComponent}
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    AngularHomeComponent,
  ],
  imports: [
    ....
    RouterModule.forRoot(routes)
  ],
  ...
})
export class AppModule {
...
}
