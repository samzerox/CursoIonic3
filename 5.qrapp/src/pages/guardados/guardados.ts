import { Component } from '@angular/core';

import { HistorialService } from '../../providers/historial/historial';
import { ScanData } from '../../models/scan-data.model';

@Component({
  selector: 'page-guardados',
  templateUrl: 'guardados.html',
})
export class GuardadosPage {

  historial: ScanData[]=[];

  constructor( private _historialService:HistorialService) {
  }

  ionViewDidLoad() {
    this.historial = this._historialService.cargar_historial();
  }

  abrir_scan(index:number){
    this._historialService.abrir_scan( index );
  }

}
