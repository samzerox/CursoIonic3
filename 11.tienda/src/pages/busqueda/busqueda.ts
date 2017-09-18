import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ProductosService } from '../../providers/index.services';

import { ProductoPage } from '../producto/producto';

@Component({
  selector: 'page-busqueda',
  templateUrl: 'busqueda.html',
})
export class BusquedaPage {

  productoPage = ProductoPage;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private _ps:ProductosService) {
  }

  buscar_productos( ev:any){
      let val = ev.target.value;

      console.log( val);

      this._ps.buscar_producto( val );
  }



}
