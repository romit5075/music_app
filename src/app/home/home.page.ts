import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { appData } from 'src/app/API/homeMusic';
import { ArtistService } from '../Shared/api/artist.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  items: any;

  openItemDetails(id: number) {
    console.log('id', id);
    this.navCtrl.navigateForward(['home/allMusic', id]);
  }

  navigateToOtherComponent() {
    this.navCtrl.navigateForward(['/allPoster']);
  }

  constructor(private navCtrl: NavController, public ArtistService: ArtistService) {

  }

  ngOnInit() {
    this.items = appData;
    // this.ArtistService.getArtists().subscribe((data) => {
    //   console.log('data', data);
    // });
  }
}
