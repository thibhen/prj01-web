import {Component} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AppComponent} from './containers/App';
import {TheAppComponent} from './containers/TheApp'; /** THE */

@Component({
  selector: 'fountain-root',
  template: '<router-outlet></router-outlet>'
})
export class RootComponent {}


export const routes = [
  {
    path: '',
    component: TheAppComponent
  },
  {
    path: 'todo',
    component: AppComponent
  }
];

export const routing = RouterModule.forRoot(routes);
