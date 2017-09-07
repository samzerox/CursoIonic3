import { Injectable } from '@angular/core';

//Plugins
import { Geolocation } from '@ionic-native/geolocation';

@Injectable()
export class UbicacionService {

  constructor(private geolocation: Geolocation) {
    console.log('Hello UbicacionProvider Provider');
  }

  iniciar_localizacion(){

    let watch = this.geolocation.watchPosition();
    watch.subscribe((data) => {
    // data can be a set of coordinates, or an error (if an error occurred).
    // data.coords.latitude
    // data.coords.longitude
    console.log(data);
    });

  }

}
