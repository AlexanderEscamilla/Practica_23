import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
  export class AlertPage {
  handlerMessage="";
  roleMessage="";
  
    constructor(private alertCtrl: AlertController) {}

  
  onClick(){
    this.presentAlert();
  }
  /*Mostramos action sheet de la documentación*/
  
    async presentAlert() {
      const alert = await this.alertCtrl.create({
        header: 'Alert!',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            handler: () => {
              this.handlerMessage = 'Alert canceled';
            },
          },
          {
            text: 'OK',
            role: 'confirm',
            handler: () => {
              this.handlerMessage = 'Alert confirmed';
            },
          },
        ],
      });
  
      await alert.present();
  
      const { role } = await alert.onDidDismiss();
      this.roleMessage = `Dismissed with role: ${role }`;

      alert.present();
    }
  }
