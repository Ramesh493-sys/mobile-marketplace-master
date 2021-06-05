import { Injectable } from '@angular/core';
import { LoadingController, AlertController, ToastController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class UtilService {
  loader: any;
  isLoading = false;

  constructor(
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    private toastCtrl: ToastController,
    public router: Router,
    private navCtrl: NavController,
  ) {
  }
  /*
  Start Loader
  Call this method to Start your Loader
  */

  async show() {
    this.isLoading = true;
    return await this.loadingCtrl.create({
      // duration: 5000,
      spinner: 'bubbles',
    }).then(a => {
      a.present().then(() => {
        console.log('presented');
        if (!this.isLoading) {
          a.dismiss().then(() => console.log('abort presenting'));
        }
      });
    });
  }

  async stop() {
    this.isLoading = false;
    return await this.loadingCtrl.dismiss().then(() => console.log('dismissed'));
  }

  /*
    Show Warning Alert Message
    param : msg = message to display
    Call this method to show Warning Alert,
    */
  async warnin(msg) {
    // Dismiss
    const alert = await this.alertCtrl.create({
      header: 'warning',
      message: msg,
      buttons: ['ok']
    });

    await alert.present();
  }

  async alert(msg) {

    const alert = await this.alertCtrl.create({
      header: 'warning',
      message: msg,
      buttons: ['ok']
    });

    await alert.present();
  }

  /*
   Show Error Alert Message
   param : msg = message to display
   Call this method to show Error Alert,
   */
  async error(msg) {
    const alert = await this.alertCtrl.create({
      header: 'error',
      message: msg,
      buttons: ['ok']
    });

    await alert.present();
  }

  /*
    Show Toast Message on Screen
     param:msg = message to display, color= background color of toast example dark,danger,light.
     position  = position of message example top,bottom
     Call this method to show toast message
     */

  async toast(msg, color, positon) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 2000,
      color: color ? color : 'primary',
      position: positon
    });
    toast.present();
  }

  async errorToast(msg) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 2000,
    });
    toast.present();
  }

  apiErrorHandler(err) {
    if (err.status === -1) {
      this.error('Failed To Connect With Server');
    } else if (err.status === 401) {
      this.error('Unauthorized Request!');
      this.navCtrl.navigateRoot('/login');
    } else if (err.status === 500) {
      this.error('Somethimg Went Wrong..');
    }
  }
}
