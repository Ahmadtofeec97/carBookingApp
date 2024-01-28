import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiEndPoint : string ='https://freeapi.miniprojectideas.com/api/ZoomCar/';
  constructor(private http:HttpClient) { }

  registerUser(obj :any){
   return this.http.post(this.apiEndPoint + 'AddNewUser', obj);
  }
  loginUser(obj :any){
   return this.http.post(this.apiEndPoint + 'Login', obj);
  }
  getCarsByOwnerId(userId :number){
    return this.http.get(this.apiEndPoint + "GetAllCarsByOwnerId?id=" + 3);
  }
}
