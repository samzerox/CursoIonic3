import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { URL_SERVICIOS } from '../../config/url.servicios';

@Injectable()
export class ProductosService {

  pagina:number = 0;
  productos:any[] = [];
  lineas:any[]=[];
  por_categoria:any[] = [];
  busquedas:any[] = [];

  constructor(public http: Http) {
    // console.log('Hello ProductosProvider Provider');
    this.cargar_todos();
    this.cargar_lineas();
  }

  cargar_lineas(){

      let url = URL_SERVICIOS + "/lineas";
      this.http.get( url )
                .map( resp=> resp.json() )
                .subscribe( data => {
                    if (data.error) {
                        //errores

                    }else{
                        this.lineas = data.lineas;
                        console.log( this.lineas);
                    }
                })

  }

  cargar_por_categoria( categoria:number ){

      let url = URL_SERVICIOS + "/productos/por_tipo/" + categoria;
      this.http.get( url)
                .map( resp=> resp.json() )
                .subscribe( data => {
                    console.log( data.productos );
                    this.por_categoria = data.productos;
                });
  }

  cargar_todos(){

      let promesa = new Promise( (resolve, reject )=>{
          let url = URL_SERVICIOS + "/productos/todos/" + this.pagina;

          this.http.get( url )
                    .map( resp => resp.json() )
                    .subscribe( data => {

                        if ( data.error ) {
                            //aqui hay un problema
                        }else{

                          let nuevaData = this.agrupar( data.productos, 2 );

                          this.productos.push( ...nuevaData );
                          this.pagina += 1;
                          console.log( this.productos );
                        }

                        if (data.productos.length == 0) {
                            console.log("Ya no hay registros");
                            resolve(false);
                            return;
                        }

                        resolve(true);
                    })
      });

      return promesa;

  }

  private agrupar(arr:any, tamano:number ){
      let nuevoArreglo =[];
      for(let i = 0; i<arr.length; i+=tamano){
          nuevoArreglo.push( arr.slice(i, i+tamano) );
      }

      // console.log( nuevoArreglo);
      return nuevoArreglo;
  }

  obtener_producto( ){
      let url = URL_SERVICIOS + "/productos/obtener_producto/S10_2016";

      this.http.get( url )
                .map( resp => resp.json() )
                .subscribe( data => {

                    if ( data.error ) {
                        //aqui hay un problema
                    }else{

                      console.log( data);
                    }


                })

  }

  buscar_producto( termino:string ){
      let url = URL_SERVICIOS + "/productos/buscar/" + termino;

      this.http.get( url )
                .subscribe( resp => {
                    let data = resp.json();
                    console.log( data.productos );
                    this.busquedas = data.productos;
                })
  }

}
