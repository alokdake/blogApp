import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebService } from '../fireb.service';
import { IonicStorageService } from '../storage';
import {
  ActionSheetController,
  AlertController,
  LoadingController,
} from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  userData: any;
  constructor(
    private fireb: FirebService,
    private router: Router,
    private storage: IonicStorageService,
    private actionSheetCtrl: ActionSheetController,
    private alertctrl: AlertController,
    private loadingctrl: LoadingController,
    private toaster: ToastController
  ) {}

  ngOnInit() {}

  public email: any;
  public password: any;

  async submit() {
    if ((this.email = 'alok@gmail.com' && this.password == '123456')) {
    }
    const toast = await this.toaster.create({
      message: 'Log In Sucessfully !!!',
      duration: 2000,
      position: 'top', //middle,top,bottom
    });
    await toast.present();
    const loader = await this.loadingctrl.create({
      message: 'Please Wait !!!',
      duration: 500,
    });
    loader.present();
    this.router.navigate(['/admin']);

    // this.fireb
    //   .loginWithEmail({ email: this.email, password: this.password })
    //   .then(
    //     (res: any) => {
    //       console.log(res);
    //       if (res.user.uid) {
    //         this.fireb.getDetails({ uid: res.user.uid }).subscribe(
    //           (res: any) => {
    //             alert('Login Sucess');
    //             this.userData = res;
    //             console.log(this.userData);
    //           },
    //           (err: any) => {
    //             console.log(err);
    //           }
    //         );
    //       }
    //     },
    //     (err: any) => {
    //       alert(err.message);
    //       console.log(err);
    //     }
    //   );
  }
}
