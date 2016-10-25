import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'the-form',
  template: require('./TheForm.html')
})
export class TheFormComponent {

  the: Object = {};

  message: String = " ";

  _http = null;

  constructor(_http: Http) {
    this._http = _http;
  }

  random() {
    this.the = {
      firstname: "thibaut",
      lastname: "henry",
      account: "FR00 1234 1234 1234 1234",
      email: "thibaut.henry@accenture.com"
    }
  }
  
  clear() {
    this.the = {};
    this.message = " ";
  }

  save() {
    console.log(JSON.stringify(this.the));
    this._http.get("/api")
      .map(response => response.json())
      .subscribe(
        data => this.message = JSON.stringify(data),
        error => console.error('Error: ' + error),
        () => console.log('Completed!')
      );
  }

}