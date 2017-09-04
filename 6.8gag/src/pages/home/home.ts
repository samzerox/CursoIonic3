import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

import { SubirPage } from '../subir/subir';

//servicios
import { CargaArchivosService } from '../../providers/carga-archivos/carga-archivos';
import { AuthService } from '../../providers/auth-service/auth-service';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

hayMas:boolean = true;

  constructor(private modalCtrl:ModalController,
              private _cas:CargaArchivosService,
              private _auth: AuthService) {

          this._cas.cargar_imagenes();
  }


  salir(){

  }

  ingresar(): void {
    this._auth.signInWithFacebook()
      .then(() => this.onSignInSuccess());
  }

  private onSignInSuccess(): void {
    console.log("Facebook nombre ",this._auth.displayName());
  }


  cargar_siguientes( infiniteScroll:any){
      console.log("siguientes");
      this._cas.cargar_imagenes()
              .then(
                ( existenMas:boolean )=>{
                  infiniteScroll.complete();
                  console.log(existenMas);
                  this.hayMas = existenMas
                })
  }

  mostrar_modal(){
      let modal = this.modalCtrl.create( SubirPage);
      modal.present();
  }

}
