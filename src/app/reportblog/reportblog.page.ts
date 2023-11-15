import { Component, OnInit } from '@angular/core';
import { IonicStorageService } from '../storage';
import { AngularFirestore } from '@angular/fire/compat/firestore';
@Component({
  selector: 'app-reportblog',
  templateUrl: './reportblog.page.html',
  styleUrls: ['./reportblog.page.scss'],
})
export class ReportblogPage implements OnInit {
  constructor(
    public fireStore: AngularFirestore,
    private storage: IonicStorageService
  ) {}
  blogReport: any;
  reportReason: any;
  name: any;
  email: any;
  reportList: any;
  reportDetails!: any[];

  ngOnInit() {
    this.getReportedBlogs();
  }

  getReportedBlogs() {
    this.fireStore
      .collection('reportList')
      .snapshotChanges()
      .subscribe((data) => {
        console.log(data);
        this.reportList = data.map((element: any) => {
          return {
            blogReport: element.payload.doc.data()['blogReport'],

            email: element.payload.doc.data()['email'],
            name: element.payload.doc.data()['name'],
            reportReason: element.payload.doc.data()['reportReason'],
          };
        });
        console.log(this.reportList);
        // this.blogReport.forEach((item: any) => {
        //   this.blogReport.push(item.authName);
        //   return;
        // });
        // console.log(this.reportDetails);

        this.storage.store('reportList', this.reportList).then((data: any) => {
          console.log(data);
        });
      });
  }
}
