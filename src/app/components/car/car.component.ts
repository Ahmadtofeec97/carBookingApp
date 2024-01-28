import { Component, OnInit } from '@angular/core';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {
  loggedUserObj: any;
  carList: any[] = [];
  carAccessoriesObj:any= {
    "accessoriesId": 0,
    "accessoriesTitle": "",
    "showOnWebsite": true,
    "carId": 0
  };

  carObj:any={
      "carId": 0,
      "brand": "",
      "name": "",
      "pricingDescription": "",
      "pricing": 0,
      "locationId": 0,
      "registeredOn": "2024-01-14T11:08:36.647Z",
      "imageUrl": "",
      "vehicleNo": "",
      "ownerUserId": 0,
      "ZoomCarAccessoriess": [
      ]
  }

  constructor(private carsr: CarService) {
    const local = localStorage.getItem('zoomUser');
    if (local != null) {
      this.loggedUserObj = JSON.parse(local);
    }
  }

  ngOnInit(): void {
    this.getCars(); 
  }

  getCars() {
    this.carsr.getCarsByOwnerId(this.loggedUserObj.userId).subscribe((res: any) => {
      this.carList = res.data;
    })
  }

  openPanel(){
    const model = document.getElementById('newCarModal');
    if(model != null){
      model.style.display='block'
    }

  }

  closePanel(){
    const model = document.getElementById('newCarModal')
    if(model != null){
      model.style.display = 'none'
    }

  }

 

}
