import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-allblogs',
  templateUrl: './allblogs.page.html',
  styleUrls: ['./allblogs.page.scss'],
})
export class AllblogsPage implements OnInit {
  constructor(
    public fireStore: AngularFirestore,
    private router: Router,
    private actionSheetCtrl: ActionSheetController,
    private loadingctrl: LoadingController,
    private toaster: ToastController
  ) {}
  blogs: any = [];
  ngOnInit() {
    this.getAllBlogs();
  }

  getAllBlogs() {
    this.fireStore
      .collection('blogs')
      .snapshotChanges() // firebase madhun data fetch karto or firebase database access
      .subscribe((data) => {
        console.log(data);
        this.blogs = data.map((element: any) => {
          return {
            id: element.payload.doc.id,
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
        // this.storage.store('blogs', this.blogs).then((data: any) => {
        //   console.log(data);
        // });
      });
  }

  async edit(id: any) {
    console.log(id);
    const loader = await this.loadingctrl.create({
      message: 'Please Wait !!!',
      duration: 1000,
    });
    loader.present();
    this.router.navigate(['/edit/', id]);
  }
  async delete(id: any) {
    this.fireStore.doc('blogs/' + id).delete();
    const toast = await this.toaster.create({
      message: 'Deleted Sucessfully !!!',
      duration: 2000,
      position: 'top', //middle,top,bottom
    });
    await toast.present();
  }
  admin() {
    this.router.navigate(['/admin']);
  }
}
