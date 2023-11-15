import { Component, OnInit } from '@angular/core';
import { IonicStorageService } from '../storage';

@Component({
  selector: 'app-viewusers',
  templateUrl: './viewusers.page.html',
  styleUrls: ['./viewusers.page.scss'],
})
export class ViewusersPage implements OnInit {
  constructor(private storage: IonicStorageService) {}

  information: any;
  ngOnInit() {
    this.storage.get('userData').then((data: any) => {
      this.information = data;
      console.log(this.information);
    });
  }
}
