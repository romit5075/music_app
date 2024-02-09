import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { appData } from 'src/app/API/homeMusic';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  items: any;

  openItemDetails(id: number) {
    console.log('id', id);
    this.router.navigate(['home/allMusic', id]);
  }

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.items = appData;
  }
  navigateToOtherComponent() {
    this.router.navigate(['/allPoster']);
  }

}
