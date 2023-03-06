import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-progressindicators',
  templateUrl: './progressindicators.page.html',
  styleUrls: ['./progressindicators.page.scss'],
})
export class ProgressindicatorsPage implements OnInit {

  constructor(private loadingCtrl: LoadingController) {}

  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Loading...',
      duration: 3000,
      spinner: 'circles',
    });

    loading.present();
  }

  ngOnInit() {
  }

}
