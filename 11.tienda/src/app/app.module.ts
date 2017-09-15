import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

//Storage
import { IonicStorageModule } from '@ionic/storage';

//Pipes
import { ImagenPipe } from '../pipes/imagen/imagen';

//paginas
import {  BuscarPage,
          CarritoPage,
          CategoriasPage,
          LoginPage,
          OrdenesPage,
          OrdenesDetallePage,
          PorCategoriasPage,
          ProductoPage,
          TabsPage
        } from '../pages/index.paginas';

//Servicios
import { CarritoService,
          ProductosService,
          UsuarioService
        } from '../providers/index.services';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    BuscarPage,
    CarritoPage,
    CategoriasPage,
    LoginPage,
    OrdenesPage,
    OrdenesDetallePage,
    PorCategoriasPage,
    ProductoPage,
    TabsPage,
    ImagenPipe
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    BuscarPage,
    CarritoPage,
    CategoriasPage,
    LoginPage,
    OrdenesPage,
    OrdenesDetallePage,
    PorCategoriasPage,
    ProductoPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CarritoService,
    ProductosService,
    UsuarioService
  ]
})
export class AppModule {}
