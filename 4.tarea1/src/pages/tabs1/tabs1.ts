import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { PERSONAJES } from '../../assets/data/personajes.data';

@Component({
  selector: 'page-tabs1',
  templateUrl: 'tabs1.html',
})
export class Tabs1Page {

  personajes:any[]=[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.personajes = PERSONAJES.slice(0);
    console.log(this.personajes);
  }



}
