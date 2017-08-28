import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { PERSONAJES } from '../../assets/data/personajes.data';
import { Pagina2Page } from '../index.paginas';

@Component({
  selector: 'page-tabs1',
  templateUrl: 'tabs1.html',
})
export class Tabs1Page {

  personajes:any[]=[];
  pagina2:any = Pagina2Page;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.personajes = PERSONAJES.slice(0);
    // console.log(this.personajes);
  }

  irPagina2(personaje:any){
    // console.log(personaje);
    this.navCtrl.push( Pagina2Page,{'personaje': personaje} );
  }



}
