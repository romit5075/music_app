import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { appData } from 'src/app/API/homeMusic';

@Component({
  selector: 'app-all-music',
  templateUrl: './all-music.page.html',
  styleUrls: ['./all-music.page.scss'],
})
export class AllMusicPage implements OnInit {

  appData: any = appData;

  OpenSingleScreen(id: number) {
    console.log(id)
    this.router.navigate(['music/', id]);
  }

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    
    this.appData = this.appData.find((item: any) => {
      return item.id == id;
    });
    console.log(this.appData.music);
  }
}
