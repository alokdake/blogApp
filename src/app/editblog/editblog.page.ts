import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { blog } from '../blog.modal';
import { WebView } from '@awesome-cordova-plugins/ionic-webview/ngx';
import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-editblog',
  templateUrl: './editblog.page.html',
  styleUrls: ['./editblog.page.scss'],
})
export class EditblogPage implements OnInit {
  constructor(
    private actRoute: ActivatedRoute,
    private router: Router,
    public fireStore: AngularFirestore,
    private webview: WebView,
    private camera: Camera,
    private alertctrl: AlertController,
    private toaster: ToastController,
    private loadingctrl: LoadingController
  ) {
    this.id = this.actRoute.snapshot.paramMap.get('id');
    console.log(this.id);
  }

  id: any;
  blogmodal = {} as blog;
  blogImage: any;
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

  ngOnInit() {
    this.getBlogsById(this.id);
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
              this.finalPicture = this.blogmodal.blogImage;
            });
          },
        },
      ],
    });
    loader.present();
  }
  del() {
    location.reload();
  }

  getBlogsById(id: any) {
    this.fireStore
      .doc('blogs/' + id)
      .valueChanges()
      .subscribe((data: any) => {
        this.blogmodal.title = data['title'];
        this.blogmodal.description = data['description'];
        this.blogmodal.blogAuthMail = data['blogAuthMail'];
        this.blogmodal.blogAuth = data['blogAuth'];
        this.blogmodal.category = data['category'];
        this.blogmodal.date = data['date'];
        this.blogmodal.blogImage = data['blogImage'];
      });
  }
  async updateBlog(blogmodal: any) {
    this.fireStore.doc('blogs/' + this.id).update(blogmodal);
    const toast = await this.toaster.create({
      message: 'Updated Sucessfully !!!',
      duration: 2000,
      position: 'top', //middle,top,bottom
    });
    await toast.present();
    const loader = await this.loadingctrl.create({
      message: 'Please Wait !!!',
      duration: 1000,
    });
    loader.present();
    this.router.navigate(['/allblogs']);
  }

  async editblog() {
    const loader = await this.loadingctrl.create({
      message: 'Please Wait !!!',
      duration: 1000,
    });
    loader.present();
    this.router.navigate(['/allblogs']);
  }
}
