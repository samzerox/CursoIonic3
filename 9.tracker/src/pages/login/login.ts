import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController, AlertController } from 'ionic-angular';

import { ViewChild, AfterViewInit } from '@angular/core';
import { Slides } from 'ionic-angular';

import { UsuarioService } from '../../providers/usuario/usuario';

import { HomePage } from '../home/home';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage implements AfterViewInit {

  @ViewChild(Slides) slides: Slides;
  clave:string = "sam-1";


  constructor(public navCtrl: NavController,
              private _us:UsuarioService,
              private loadingCtrl:LoadingController,
              private alertCtrl: AlertController) {
  }

  continuar(){

    let loading = this.loadingCtrl.create({
        content: "Espere por favor..."
    });

    loading.present();

    //Verificar si la clave es valida
    this._us.verifica_usuario( this.clave )
            .then( valido=>{
                loading.dismiss();
                if( valido ){
                    //Continua a la sig. pantalla
                    this.slides.lockSwipes(false);
                    this.slides.slideNext();
                    this.slides.lockSwipes(true);
                }else{
                    this.alertCtrl.create({
                        title:"Clave no es correcta",
                        subTitle:"Por favor verifique su clave, o hable con el administrador",
                        buttons:["Ok!"]
                    }).present();
                }

            }).catch( error=>{
                loading.dismiss();
                console.log("Error en verificacion de usuario: " + JSON.stringify( error ));
            })

  }
  ingresar(){
    //tenemos la clave, ir al home
    this.navCtrl.setRoot( HomePage );

  }


  ngAfterViewInit(){

    //lockSwipes: bloquea los slides
    this.slides.lockSwipes(true);
    this.slides.freeMode = false;
    this.slides.paginationType = "progress";
  }

}
