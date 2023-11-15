import { Component, OnInit } from '@angular/core';
import { FirebService } from '../fireb.service';
import { Router } from '@angular/router';
import { WebView } from '@awesome-cordova-plugins/ionic-webview/ngx';
import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { blog } from '../blog.modal';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActionSheetController, LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-addblog',
  templateUrl: './addblog.page.html',
  styleUrls: ['./addblog.page.scss'],
})
export class AddblogPage implements OnInit {
  constructor(
    private fireb: FirebService,
    private router: Router,
    private webview: WebView,
    private camera: Camera,
    private alertctrl: AlertController,
    private toaster: ToastController,
    public fireStore: AngularFirestore,
    private loadingctrl: LoadingController
  ) {}

  ngOnInit() {
    // this.finalPicture =
    //   'https://edge.99images.com/photos/wallpapers/flowers/flowers-in-snow%20android-iphone-desktop-hd-backgrounds-wallpapers-1080p-4k-t50gi.jpg';
  }
  public title: any;
  public description: any;
  public authMail: any;
  public authName: any;
  public date: any;
  public category: any;
  selectedCategory: any;
  finalPicture: any;
  name: any;
  categoryName: any;

  categories = [
    { categoryName: 'Technology' },
    { categoryName: 'Lifestyle' },
    { categoryName: 'Travel' },
    { categoryName: 'Eduction' },
    { categoryName: 'Fitness' },
    { categoryName: 'Adventure' },
    { categoryName: 'Management' },
    { categoryName: 'Gaming' },
    { categoryName: 'Economics' },
    { categoryName: 'Food' },
    { categoryName: 'Photography' },
    { categoryName: 'Movies' },
    { categoryName: 'DIY craft' },
    { categoryName: 'Buisness' },
    { categoryName: 'Personal' },
    { categoryName: 'Multimedia' },
  ];

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

  async addBlog() {
    let blogModel: blog = {
      title: this.title,
      description: this.description,
      blogAuthMail: this.authMail,
      date: this.date,
      blogAuth: this.authName,
      category: this.selectedCategory,
      blogImage: this.finalPicture,
    };
    console.log(blogModel);

    this.fireStore.collection('blogs').add(blogModel);

    const toast = await this.toaster.create({
      message: 'Blog Added !!!',
      duration: 2000,
      position: 'top', //middle,top,bottom
    });
    await toast.present();
    this.router.navigate(['/home']);
  }

  doRefresh(event: any) {
    setTimeout(() => {
      event.target.complete();
    }, 4000);
    location.reload();
  }

  triggerEvent() {
    console.log(this.selectedCategory);
  }
}
