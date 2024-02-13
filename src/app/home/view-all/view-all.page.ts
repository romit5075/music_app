import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { appData } from '../../API/homeMusic';

@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.page.html',
  styleUrls: ['./view-all.page.scss'],
})
export class ViewAllPage implements OnInit {

  items: any[];

  constructor(private router: Router) {
    this.items = appData

  }

  ngOnInit(): void {
    console.log('ViewAllPage');
  }
}
