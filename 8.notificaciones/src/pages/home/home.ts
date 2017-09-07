import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {
  Push,
  PushToken
} from '@ionic/cloud-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
              public push: Push) {
      this.inicializar_notificaciones();
  }

  private inicializar_notificaciones(){

    this.push.register().then((t: PushToken) => {
      return this.push.saveToken(t);
    }).then((t: PushToken) => {
      console.log('Token saved:', t.token);
    }).catch( error=>{
        console.log("Error en el registro" + JSON.stringify( error) );
    });

    this.push.rx.notification()
    .subscribe((msg) => {
      alert(msg.title + ': ' + msg.text);
    });

  }





}
