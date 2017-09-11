import { Component } from '@angular/core';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  lat: number;
  lng: number;

  taxistas:any[] = [];
  taxistaSeleccionado:any={};

  siguiendo:boolean = false;

  constructor(private afDB: AngularFireDatabase){
          afDB.list('/usuarios')
                  .subscribe( taxistas=>{

                      console.log(taxistas);
                      this.taxistas = taxistas;

                      if (this.siguiendo) {
                          //si estoy siguiendo a alguien
                          for (let taxista of taxistas) {
                              if ( taxista.$key === this.taxistaSeleccionado.$key ) {
                                  this.lat = taxista.lat;
                                  this.lng = taxista.lng;
                              }
                          }
                      }

                  })

  }

  seguir_taxista(taxista:any){
      this.lat = taxista.lat;
      this.lng = taxista.lng;

      this.siguiendo = true;

      this.taxistaSeleccionado = taxista;
  }

  dejar_seguir(){
    this.siguiendo = false;
    this.taxistaSeleccionado = {};
  }



}
