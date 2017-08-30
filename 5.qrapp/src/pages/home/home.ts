import { Component } from '@angular/core';

//Componentes
import { ToastController, Platform } from 'ionic-angular';

//Plugins
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

//servicios
import { HistorialService } from '../../providers/historial/historial';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor( private barcodeScanner: BarcodeScanner,
                private toastCtrl: ToastController,
                private platform:Platform,
                private _historialService:HistorialService) {}

  scan(){
      console.log("Realizando scan...");

      if ( !this.platform.is('cordova') ) {
        // this._historialService.agregar_historial("http://google.com");
        // this._historialService.agregar_historial("geo:25.609187063591577,-100.15708959736935");
//         this._historialService.agregar_historial( `BEGIN:VCARD
// VERSION:2.1
// N:Kent;Clark
// FN:Clark Kent
// ORG:
// TEL;HOME;VOICE:12345
// TEL;TYPE=cell:67890
// ADR;TYPE=work:;;;
// EMAIL:clark@superman.com
// END:VCARD` );
          this._historialService.agregar_historial("MATMSG:TO:sam_zerox@hotmail.com;SUB:Hola Mundo;BODY:Test de correo;;");
          return;
      }

      this.barcodeScanner.scan().then( ( barcodeData ) => {
       // Success! Barcode data is here
       console.log("result:", barcodeData.text);
       console.log("Format:", barcodeData.format);
       console.log("Cancelled:", barcodeData.cancelled);

       if ( barcodeData.cancelled == false && barcodeData.text != null ) {
         this._historialService.agregar_historial( barcodeData.text );

       }

      }, (err) => {
          // An error occurred
          console.error("Error: ", err);
          this.mostrar_error( "Error: "+ err );
      } );
  }


mostrar_error( mensaje:string){

  let toast = this.toastCtrl.create({
    message: mensaje,
    duration: 2500
  });
  toast.present();

}




}
