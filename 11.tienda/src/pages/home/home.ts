import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ProductosService, CarritoService, UsuarioService } from '../../providers/index.services';

import { ProductoPage } from '../index.paginas';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  hayMas:boolean = true;

    constructor(public navCtrl: NavController,
                private _ps: ProductosService,
                private _us: UsuarioService,
                private _cs: CarritoService) {

    }

    siguiente_pagina( infiniteScroll ){
        this._ps.cargar_todos()
              .then( ( existenMas:boolean )=>{
                  infiniteScroll.complete();
                  // console.log( existenMas );
                  this.hayMas = existenMas;
              });
    }

    seleccionar( producto:any ){
      this.navCtrl.push(ProductoPage, { producto });
    }






}
