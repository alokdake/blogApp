import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { IonicStorageService } from '../storage';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-reportlist',
  templateUrl: './reportlist.page.html',
  styleUrls: ['./reportlist.page.scss'],
})
export class ReportlistPage implements OnInit {
  constructor(
    private toaster: ToastController,
    private router: Router,
    private storage: IonicStorageService,
    public fireStore: AngularFirestore
  ) {}

  blogReport: any;
  public name: any;
  public email: any;
  reportReason!: boolean;

  ngOnInit() {
    this.storage.get('information').then((data: any) => {
      this.blogReport = JSON.parse(data);
      console.log(this.blogReport);
    });
  }

  async submit() {
    let reportModel = {
      name: this.name,
      email: this.email,
      reportReason: this.reportReason,
      blogReport: this.blogReport,
    };
    console.log(reportModel);

    this.fireStore.collection('reportList').add(reportModel);

    const toast = await this.toaster.create({
      message: 'Reported !!!',
      duration: 2000,
      position: 'top', //middle,top,bottom
    });
    await toast.present();
    this.router.navigate(['/viewblog']);
  }
  cancel() {
    this.router.navigate(['/viewblog']);
  }
}
