import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import {TapModalPage} from "../tap-modal-page/tap-modal-page";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private modalCtrl: ModalController) {
  }

  launchTapModal() {
      let tapModal = this.modalCtrl.create(TapModalPage, { userId: 8675309 }, { cssClass: "tapModal"});
      tapModal.present();
  }

}
