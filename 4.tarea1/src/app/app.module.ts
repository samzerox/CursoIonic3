import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';


import {
  Pagina2Page,
  TabsPage,
  Tabs1Page,
  Tabs2Page,
  Tabs3Page
} from '../pages/index.paginas';

@NgModule({
  declarations: [
    MyApp,
    Pagina2Page,
    TabsPage,
    Tabs1Page,
    Tabs2Page,
    Tabs3Page
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Pagina2Page,
    TabsPage,
    Tabs1Page,
    Tabs2Page,
    Tabs3Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
