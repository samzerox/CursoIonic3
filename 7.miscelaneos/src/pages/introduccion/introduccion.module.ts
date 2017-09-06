import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IntroduccionPage } from './introduccion';

@NgModule({
  declarations: [
    IntroduccionPage,
  ],
  imports: [
    IonicPageModule.forChild(IntroduccionPage),
  ],
})
export class IntroduccionPageModule {}
