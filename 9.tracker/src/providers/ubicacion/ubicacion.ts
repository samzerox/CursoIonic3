import { Injectable } from '@angular/core';

//Plugins
import { Geolocation } from '@ionic-native/geolocation';

import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';

import { UsuarioService } from '../usuario/usuario';

@Injectable()
export class UbicacionService {

  usuario: FirebaseObjectObservable<any[]>;
  private watch:any;

  constructor(private geolocation: Geolocation,
              private afDB: AngularFireDatabase,
            private _us:UsuarioService) {
    console.log('Hello UbicacionProvider Provider');

    if( !this._us.clave){
      return;
    }

    this.usuario = this.afDB.object("/usuarios/"+ this._us.clave );
  }

  iniciar_localizacion(){

    this.watch = this.geolocation.watchPosition()
                .subscribe((data) => {
    // data can be a set of coordinates, or an error (if an error occurred).
    // data.coords.latitude
    // data.coords.longitude
    // console.log(data);

    if( !this._us.clave){
      return;
    }

    this.usuario.update({ lat:data.coords.latitude, lng:data.coords.longitude});
    });

  }

  detener_watch(){
    this.watch.unsubscribe();
  }

}
