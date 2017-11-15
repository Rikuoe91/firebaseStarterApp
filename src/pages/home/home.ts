import { Component } from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {DataProvider} from "../../providers/data/data";

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
speakers:any;
  constructor(public navCtrl: NavController, public dataService:DataProvider) {

  }
  ionViewDidLoad(){
    this.speakers = this.dataService.speakerList;
  }
itemClicked(speaker):void{
    this.navCtrl.push('DetailPage', speaker)
  }
}
