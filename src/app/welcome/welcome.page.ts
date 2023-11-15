import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {
  constructor(private router: Router, private loadingctrl: LoadingController) {}

  ngOnInit() {}

  swiperSlideChanged(e: any) {
    console.log('changed', e);
  }
  async skip() {
    const loader = await this.loadingctrl.create({
      message: 'Please Wait !!!',
      duration: 500,
    });
    loader.present();
    this.router.navigate(['/home']);
  }
}
