import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicStorageService } from '../storage';
import {
  ActionSheetController,
  AlertController,
  LoadingController,
} from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  constructor(
    private router: Router,
    private storage: IonicStorageService,
    private actionSheetCtrl: ActionSheetController,
    private alertctrl: AlertController,
    private loadingctrl: LoadingController,
    public fireStore: AngularFirestore,
    private toaster: ToastController
  ) {}

  information: any;
  finalPicture: any;
  blogs: any;

  ngOnInit() {
    this.getAllBlogs();

    this.storage.get('userData').then((data: any) => {
      this.information = data;
    });
  }

  view(item: any) {
    console.log(item);
    this.storage
      .store('information', JSON.stringify(item))
      .then((data: any) => {
        console.log(data);
        this.router.navigate(['/viewblog']);
      });
  }

  cancel() {}

  doRefresh(event: any) {
    setTimeout(() => {
      event.target.complete();
    }, 4000);
    location.reload();
  }
  async add() {
    const toast = await this.toaster.create({
      message: 'Only Admin Can Add the Blogs !!!',
      duration: 2000,
      position: 'top', //middle,top,bottom
    });
    await toast.present();
    const loader = await this.loadingctrl.create({
      message: 'Please Wait !!!',
      duration: 500,
    });
    loader.present();
  }
  async addblog() {
    const toast = await this.toaster.create({
      message: 'Only Admin Can Add the Blogs !!!',
      duration: 2000,
      position: 'top', //middle,top,bottom
    });
    await toast.present();
    const loader = await this.loadingctrl.create({
      message: 'Please Wait !!!',
      duration: 500,
    });
    loader.present();
  }
  async admin() {
    const loader = await this.loadingctrl.create({
      message: 'Please Wait !!!',
      duration: 500,
    });
    loader.present();
    this.router.navigate(['/login']);
  }

  typeOfMenu: string = 'overlay';
  aboutUs() {
    this.router.navigate(['/aboutus']);
  }
  categories() {
    this.router.navigate(['/categories']);
  }
  home() {
    this.router.navigate(['/home']);
  }
  async login() {
    const loader = await this.loadingctrl.create({
      message: 'Please Wait !!!',
      duration: 500,
    });
    loader.present();
    this.router.navigate(['/login']);
  }
  register() {
    this.router.navigate(['/register']);
  }
  logout() {
    this.router.navigate(['/login']);
  }

  toggleTheme(event: any) {
    if (event.detail.checked) {
      document.body.setAttribute('color-theme', 'dark');
    } else {
      document.body.setAttribute('color-theme', 'light');
    }
  }

  getAllBlogs() {
    this.fireStore
      .collection('blogs')
      .snapshotChanges() // firebase madhun data fetch karto or firebase database access
      .subscribe((data) => {
        console.log(data);
        this.blogs = data.map((element: any) => {
          return {
            title: element.payload.doc.data()['title'],
            description: element.payload.doc.data()['description'],
            blogAuth: element.payload.doc.data()['blogAuth'],
            blogAuthMail: element.payload.doc.data()['blogAuthMail'],
            date: element.payload.doc.data()['date'],
            blogImage: element.payload.doc.data()['blogImage'],
            category: element.payload.doc.data()['category'],
          };
        });

        console.log(this.blogs);
        this.storage.store('blogs', this.blogs).then((data: any) => {
          console.log(data);
        });
      });
  }
}
