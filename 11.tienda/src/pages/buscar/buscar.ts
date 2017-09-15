import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ProductosService } from '../../providers/index.services';

@Component({
  selector: 'page-buscar',
  templateUrl: 'buscar.html',
})
export class BuscarPage {

  searchQuery: string = '';
  items: string[];

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private _ps:ProductosService) {
  }

  initializeItems() {
    this.items = [
      'Amsterdam',
      'Bogota'
    ];
  }

  getItems(ev: any) {
    // Reset items back to all of the items
      this.initializeItems();

      // set val to the value of the searchbar
      let val = ev.target.value;

      // if the value is an empty string don't filter the items
      if (val && val.trim() != '') {
        this.items = this.items.filter((item) => {
          return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
        })
      }
    }

}
