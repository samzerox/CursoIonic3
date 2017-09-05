import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

import { SubirPage } from '../subir/subir';

//servicios
import { CargaArchivosService } from '../../providers/carga-archivos/carga-archivos';
import { AuthService } from '../../providers/auth-service/auth-service';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

hayMas:boolean = true;

  constructor(private modalCtrl:ModalController,
              private _cas:CargaArchivosService,
              private _auth: AuthService,
              private afAuth: AngularFireAuth) {

          this._cas.cargar_imagenes();
  }


  salir(){
      this._auth.signOut();
  }

  ingresar(): void {
    this.afAuth.auth
      .signInWithPopup(new firebase.auth.FacebookAuthProvider())
      .then(res => console.log("Facebook nombre ", res.user.displayName));
      // .then(() => this.onSignInSuccess());
  }

  // private onSignInSuccess(): void {
  //   console.log("Facebook nombre ",this._auth.displayName());
  // }


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
