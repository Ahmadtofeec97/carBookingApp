import { Component } from '@angular/core';
import { CarService } from './services/car.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'projectng1';
  registerObj: any = {
    "userId": 0,
    "name": "",
    "userRole": "",
    "emailId": "",
    "mobileNo": "",
    "password": "",
    "createdOn": new Date()
  };
  loginObj: any = {
    "userId": 0,
    "name": "111",
    "userRole": "111",
    "emailId": "",
    "mobileNo": "11",
    "password": "",
    "createdOn": new Date()
  };

  loggedUserObj: any;
  constructor(private carsr: CarService) {
    const local = localStorage.getItem('zoomUser');
    if (local != null) {
      this.loggedUserObj = JSON.parse(local);
    }
  }

  onRegister() {
    this.carsr.registerUser(this.registerObj).subscribe((res: any) => {
      if (res.result) {
        alert('Registration Success')
        this.closeRegister();
        this.loggedUserObj = res.data;
      } else {
        alert(res.message)
      }
    })
  }
  openRegister() {
    const model = document.getElementById('registerModal');
    if (model != null) {
      model.style.display = 'block'
    }
  }
  closeRegister() {
    const model = document.getElementById('registerModal');
    if (model != null) {
      model.style.display = 'none'
    }
  }

  onLogin() {
    this.carsr.loginUser(this.loginObj).subscribe((res: any) => {
      if (res.result) {
        alert('Login Success')
        localStorage.setItem('zoomUser', JSON.stringify(res.data))
        this.loggedUserObj = res.data;
        this.closeLogin()
      } else {
        alert(res.message)
      }
    })
  }

  logoff() {
    localStorage.removeItem('zoomUser')
    this.loggedUserObj = undefined;
  }
  openLogin() {
    const model = document.getElementById('loginModal');
    if (model != null) {
      model.style.display = 'block'
    }
  }

  closeLogin() {
    const model = document.getElementById('loginModal');
    if (model != null) {
      model.style.display = 'none'
    }
  }
}
