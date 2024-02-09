import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.page.html',
  styleUrls: ['./view-all.page.scss'],
})
export class ViewAllPage implements OnInit {


  items: any[];

  constructor(private router: Router) {
    this.items = [
      {
        imageUrl: './assets/Images/4.jpeg',
        title: 'Item 1',
        description: 'Description for Item 1',
      },
      {
        imageUrl: './assets/Images/2.jpeg',
        title: 'Item 2',
        description: 'Description for Item 2',
      },
      {
        imageUrl: './assets/Images/6.jpeg',
        title: 'Item 1',
        description: 'Description for Item 1',
      },
      {
        imageUrl: './assets/Images/2.jpeg',
        title: 'Item 2',
        description: 'Description for Item 2',
      },
      {
        imageUrl: './assets/Images/4.jpeg',
        title: 'Item 1',
        description: 'Description for Item 1',
      },
      {
        imageUrl: './assets/Images/2.jpeg',
        title: 'Item 2',
        description: 'Description for Item 2',
      },
      {
        imageUrl: './assets/Images/6.jpeg',
        title: 'Item 1',
        description: 'Description for Item 1',
      },
      {
        imageUrl: './assets/Images/2.jpeg',
        title: 'Item 2',
        description: 'Description for Item 2',
      },
      {
        imageUrl: './assets/Images/4.jpeg',
        title: 'Item 1',
        description: 'Description for Item 1',
      },
      {
        imageUrl: './assets/Images/2.jpeg',
        title: 'Item 2',
        description: 'Description for Item 2',
      },
      {
        imageUrl: './assets/Images/6.jpeg',
        title: 'Item 1',
        description: 'Description for Item 1',
      },
      {
        imageUrl: './assets/Images/2.jpeg',
        title: 'Item 2',
        description: 'Description for Item 2',
      },
    ];
  }
  ngOnInit(): void {
    console.log('ViewAllPage');
  }
}
