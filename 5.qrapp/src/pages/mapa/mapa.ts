import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';


@Component({
  selector: 'page-mapa',
  templateUrl: 'mapa.html',
})
export class MapaPage {

  lat: number;
  lng: number;

  constructor( public navParams: NavParams,
                private viewCtrl:ViewController) {

    // this.lat = 25.609187063591577 ;
    // this.lng = -100.15708959736935 ;

                                                  //split separa donde haya lo que esta entre parentecis
    let coordsArray = this.navParams.get("coords").split(",");

                              //como su nombre lo dice, remplaza lo de las comillas por las otras
    this.lat = Number( coordsArray[0].replace("geo:","") );
    this.lng = Number( coordsArray[1] );

    console.log( this.lat, this.lng );
  }

  cerrar_modal(){
      this.viewCtrl.dismiss();
  }



}
