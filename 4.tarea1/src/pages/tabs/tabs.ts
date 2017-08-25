import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {Tabs1Page, Tabs2Page, Tabs3Page} from '../index.paginas';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1:any;
  tab2:any;
  tab3:any;

  constructor() {
    this.tab1 = Tabs1Page;
    this.tab2 = Tabs2Page;
    this.tab3 = Tabs3Page;
  }



}
