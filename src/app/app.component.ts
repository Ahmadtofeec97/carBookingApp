import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'projectng1';
registerObj:any = {
    "userId": 0,
    "name": "string",
    "userRole": "string",
    "emailId": "string",
    "mobileNo": "string",
    "password": "string",
    "createdOn": new Date()
};
  openRegister(){
    const model =document.getElementById('registerModal');
    if(model != null){
     model.style.display = 'block' 
    }
  }
  closeRegister(){
    const model =document.getElementById('registerModal');
    if(model != null){
     model.style.display = 'none' 
    }
  }
}
