import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoadingController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {
  constructor(
    private router: Router,
    private loadingctrl: LoadingController,
    private toaster: ToastController
  ) {}
  typeOfMenu: string = 'overlay';

  ngOnInit() {}
  async allBlogs() {
    const loader = await this.loadingctrl.create({
      message: 'Please Wait !!!',
      duration: 500,
    });
    loader.present();
    this.router.navigate(['/allblogs']);
  }
  async reportedBlogs() {
    const loader = await this.loadingctrl.create({
      message: 'Please Wait !!!',
      duration: 1000,
    });
    loader.present();
    this.router.navigate(['/reportblog']);
  }
  async addBlog() {
    const loader = await this.loadingctrl.create({
      message: 'Please Wait !!!',
      duration: 1000,
    });
    loader.present();
    this.router.navigate(['/addblog']);
  }
  toggleTheme(event: any) {
    if (event.detail.checked) {
      document.body.setAttribute('color-theme', 'dark');
    } else {
      document.body.setAttribute('color-theme', 'light');
    }
  }
  aboutUs() {
    this.router.navigate(['/aboutus']);
  }
  categories() {
    this.router.navigate(['/categories']);
  }
  home() {
    this.router.navigate(['/admin']);
  }
  async logout() {
    const toast = await this.toaster.create({
      message: 'Log Out Sucessfully !!!',
      duration: 2000,
      position: 'top', //middle,top,bottom
    });
    await toast.present();
    const loader = await this.loadingctrl.create({
      message: 'Please Wait !!!',
      duration: 500,
    });
    loader.present();
    this.router.navigate(['/login']);
  }
}
