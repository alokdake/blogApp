import { Component, OnInit } from '@angular/core';
import { IonicStorageService } from '../storage';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  constructor(private storage: IonicStorageService) {}

  dataBlog = [];
  filter: any;

  ngOnInit() {
    this.storage.get('blogs').then((data: any) => {
      this.dataBlog = data;
      console.log(this.dataBlog);
    });
  }
}
