import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';

import { UsuarioService } from '../providers/usuario/usuario';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
              private _us:UsuarioService) {
    platform.ready().then(() => {

      this._us.cargar_storage()
            .then( ()=>{
                if (this._us.clave) {
                    this.rootPage = HomePage
                }else{
                  this.rootPage = "LoginPage";
                }
                statusBar.styleDefault();
                splashScreen.hide();
            })


    });
  }
}
