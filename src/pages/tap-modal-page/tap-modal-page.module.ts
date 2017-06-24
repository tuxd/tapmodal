import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TapModalPage } from './tap-modal-page';

@NgModule({
  declarations: [
    TapModalPage,
  ],
  imports: [
    IonicPageModule.forChild(TapModalPage),
  ],
  exports: [
    TapModalPage
  ]
})
export class TapModalPageModule {}
