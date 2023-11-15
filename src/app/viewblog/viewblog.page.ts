import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { IonicStorageService } from '../storage';
import {
  ActionSheetController,
  AlertController,
  LoadingController,
} from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-viewblog',
  templateUrl: './viewblog.page.html',
  styleUrls: ['./viewblog.page.scss'],
})
export class ViewblogPage implements OnInit {
  presentingElement = undefined;
  constructor(
    private actionSheetCtrl: ActionSheetController,
    private router: Router,
    private storage: IonicStorageService,
    private loadingctrl: LoadingController,
    private toaster: ToastController
  ) {}

  blog: any;
  ngOnInit() {
    this.storage.get('information').then((data: any) => {
      this.blog = JSON.parse(data);
      console.log(this.blog);
    });
  }

  canDismiss = async () => {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Are you sure?',
      buttons: [
        {
          text: 'Yes',
          role: 'confirm',
        },
        {
          text: 'No',
          role: 'cancel',
        },
      ],
    });

    actionSheet.present();

    const { role } = await actionSheet.onWillDismiss();

    return role === 'confirm';
  };

  async actionSheet() {
    let actionSheet = await this.actionSheetCtrl.create({
      buttons: [
        {
          text: 'Edit', //predefine proprties of buttons is text,role,action,data,handler in that we call method
          handler: () => {
            this.edit();
          },
        },
        {
          text: 'Delete',
          handler: () => {
            this.delete();
          },
        },
        {
          text: 'Report',
          handler: () => {
            this.reportlist();
          },
        },
        {
          text: 'Cancel',
          role: 'cancel',
          data: {},
        },
      ],
    });

    (await actionSheet).present();
  }

  async edit() {
    const toast = await this.toaster.create({
      message: 'Only Admin Can Edit the Blog !!!',
      duration: 2000,
      position: 'top', //middle,top,bottom
    });
    await toast.present();
  }

  close() {
    this.router.navigate(['/viewblog']);
  }
  async delete() {
    const toast = await this.toaster.create({
      message: 'Only Admin Can Delete the Blog !!!',
      duration: 2000,
      position: 'top', //middle,top,bottom
    });
    await toast.present();
  }
  reportlist() {
    this.router.navigate(['/reportlist']);
  }
  async back() {
    const loader = await this.loadingctrl.create({
      message: 'Please Wait !!!',
      duration: 500,
    });
    loader.present();
    this.router.navigate(['/home']);
  }
}
