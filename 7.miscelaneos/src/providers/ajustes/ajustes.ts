import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage';

import { Platform } from 'ionic-angular';


@Injectable()
export class AjustesService{

  ajustes = {
    mostrar_tutorial : true
  }

  constructor(private platform:Platform,
              private storage:Storage) {
    console.log('Hello AjustesProvider Provider');
  }

  cargar_storage(){

    let promesa = new Promise( (resolve, reject)=>{
      if (this.platform.is("cordova") ) {
          //Dispositivo
          console.log("inicializando storage");
          this.storage.ready()
                    .then( ()=>{
                        console.log("Storage Listo");
                        this.storage.get("ajustes")
                            .then( ajustes=>{

                              if(ajustes){
                                this.ajustes = ajustes;
                              }
                                resolve();
                            });



                    });

      }else{
        //Escritorio
        if( localStorage.getItem( "ajustes" ) ){
          this.ajustes = JSON.parse( localStorage.getItem("ajustes") );
        }
        resolve();

      }

    });

    return promesa

  }

  guardar_storage(){
      if (this.platform.is("cordova") ) {
          //Dispositivo
          this.storage.ready()
                .then( ()=>{
                  this.storage.set( "ajustes", this.ajustes );
                });

      }else{
        //Escritorio
        localStorage.setItem("ajustes", JSON.stringify( this.ajustes) );
      }
  }

}
