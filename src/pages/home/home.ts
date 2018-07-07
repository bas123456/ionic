import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetailPage } from '../detail/detail';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
farmer : any;
todo = {
  name:null,
  age:null,
  tel:null
}
  constructor(public navCtrl: NavController){
    if(localStorage.getItem("Farmer")==null){
    this.farmer =[{
      name:'mos',
      age:22,
      tel:"083-5788146"
    },{
      name:'ton',
      age:22,
      tel:"02-1235456"
    },{
      name:'bas',
      age:21,
      tel:"083-454652"
    },{
      name:'abc',
      age:123,
      tel:"02-365465"
    }];
    localStorage.setItem("Farmer",JSON.stringify(this.farmer));
  }else{
    this.farmer = JSON.parse(localStorage.getItem("Farmer"))
  }
  }
  detail(data){
    this.navCtrl.push(DetailPage,data);
    //console.log(data);
  }
  AddFarmer(){
    let farmer = JSON.parse(localStorage.getItem("Farmer"));
    farmer.push(this.todo)
    localStorage.setItem("Farmer",JSON.stringify(farmer));
    this.farmer = JSON.parse(localStorage.getItem("Farmer"));
    this.todo = {
      name:null,
      age:null,
      tel:null
    }
  }
}
