import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CarritoService } from '../../providers/carrito/carrito';

@Component({
  selector: 'page-producto',
  templateUrl: 'producto.html',
})
export class ProductoPage {

  producto:any={};

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private _cs:CarritoService ) {

      this.producto = this.navParams.get( "producto" );
      console.log( this.producto );
  }



}
