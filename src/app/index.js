import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {routing, RootComponent} from './routes';
import {store} from './reducers';

import {AppComponent} from './containers/App';
import {FooterComponent} from './components/Footer';
import {HeaderComponent} from './components/Header';
import {MainSectionComponent} from './components/MainSection';
import {TodoItemComponent} from './components/TodoItem';
import {TodoTextInputComponent} from './components/TodoTextInput';

/** THE */
import {HttpModule} from '@angular/http';
import {TheAppComponent} from './containers/TheApp';
import {TheFormComponent} from './components/TheForm';
/** THE */

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    store,
    HttpModule /** THE */
  ],
  declarations: [
    RootComponent,
    AppComponent,
    FooterComponent,
    HeaderComponent,
    MainSectionComponent,
    TodoItemComponent,
    TodoTextInputComponent,
    TheAppComponent,/** THE */
    TheFormComponent /** THE */
  ],
  bootstrap: [RootComponent] 
})
export class AppModule {}
