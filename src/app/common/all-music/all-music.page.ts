import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { appData } from 'src/app/API/homeMusic';

@Component({
  selector: 'app-all-music',
  templateUrl: './all-music.page.html',
  styleUrls: ['./all-music.page.scss'],
})
export class AllMusicPage implements OnInit {

  appData: any = appData;
  originMusic: any;

  OpenSingleScreen(id: number) {
    this.navCtrl.navigateForward(['home/music/', id], {
      queryParams: { musicDataKey: JSON.stringify(this.originMusic) }
    });
  }

  constructor(private navCtrl: NavController, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];

    this.appData = this.appData.find((item: any) => {
      return item.id == id;
    });
    this.originMusic = this.appData.music
    // console.log(this.originMusic)
  }
}
