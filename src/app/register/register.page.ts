import { Component, OnInit } from '@angular/core';
import { FirebService } from '../fireb.service';
import { Router } from '@angular/router';
import { WebView } from '@awesome-cordova-plugins/ionic-webview/ngx';
import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  constructor(
    private fireb: FirebService,
    private router: Router,
    private webview: WebView,
    private camera: Camera,
    private alertctrl: AlertController,
    private toaster: ToastController
  ) {}

  ngOnInit() {}

  public RegisterForm!: FormGroup;
  public name: any;
  public email: any;
  public password: any;
  public cnfpass: any;
  finalPicture: any;

  submit() {
    this.fireb
      .userRegistration({
        email: this.email,
        password: this.password,
      })
      .then(
        (result: any) => {
          if (result.user.uid) {
            let data = {
              name: this.name,
              email: this.email,
              password: this.password,
              confirmPassword: this.cnfpass,
            };
            console.log(data);
            this.fireb.saveUserDetails(data).then(
              (res: any) => {
                console.log(res);
                alert('Account Created');
                this.router.navigate(['/login']);
              },
              (err: any) => {
                alert(err);
              }
            );
          }
        },
        (err: { message: any }) => {
          alert(err.message);
          console.log(err);
        }
      );
  }

  cameraOptions: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.FILE_URI,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
    correctOrientation: true,
  };
  galleryOptions: CameraOptions = {
    quality: 100,
    sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
    destinationType: this.camera.DestinationType.FILE_URI,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
    correctOrientation: true,
  };
  async choosePhoto() {
    const loader = await this.alertctrl.create({
      header: 'Choose From',
      buttons: [
        {
          text: 'Open Camera',
          handler: () => {
            this.camera.getPicture(this.cameraOptions).then((result) => {
              let selectedPhoto = this.webview.convertFileSrc(result);
              this.finalPicture = selectedPhoto;
              console.log(this.finalPicture);
            });
          },
        },
        {
          text: 'Open Gallery',
          handler: () => {
            this.camera.getPicture(this.galleryOptions).then((result) => {
              let selectedPhoto = this.webview.convertFileSrc(result);
              this.finalPicture = selectedPhoto;
              console.log(this.finalPicture);
            });
          },
        },
      ],
    });
    loader.present();
  }
  delete() {
    location.reload();
  }
}
