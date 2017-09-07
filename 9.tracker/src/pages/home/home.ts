import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

//Servicios
import { UbicacionService } from '../../providers/ubicacion/ubicacion';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
              private _ubicacion:UbicacionService) {

        this._ubicacion.iniciar_localizacion();
  }

}
