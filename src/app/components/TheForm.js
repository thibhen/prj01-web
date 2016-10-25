import {Component} from '@angular/core';


@Component({
  selector: 'the-form',
  template: require('./TheForm.html')
})
export class TheFormComponent {

  the: Object = {};
  

  random(){
    this.the = {
      firstname : "thibaut",
      lastname : "henry",
      account : "FR00 1234 1234 1234 1234",
      email : "thibaut.henry@accenture.com"
    }
  }
  clear(){
    this.the = {}
  }
  save(){
    console.log(this.the);
  }
  
}