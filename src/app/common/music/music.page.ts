import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuController, NavController } from '@ionic/angular';
import { appData } from '../../API/homeMusic';

@Component({
  selector: 'app-music',
  templateUrl: './music.page.html',
  styleUrls: ['./music.page.scss'],
})
export class MusicPage implements OnInit {

  public progress = 0;
  public isPlaying = false; // Track if music is currently playing
  public currentIndex = 0; // Index of the current music item
  public singleMusic: any;

  
  // Play music
  play() {
    console.log('hell')
    this.isPlaying = !this.isPlaying; // Toggle isPlaying
    if (this.isPlaying) {
      // Logic to start playing music
      console.log('Playing music...')
    } else {
      // Logic to pause music
    }
  }
  // Pause music
  pause() {
    console.log('pose')
    this.isPlaying = !this.isPlaying; // Toggle isPlaying
    if (!this.isPlaying) {
      console.log('Pose music...')

    }
  }

  togglePlayPause() {
    this.isPlaying = !this.isPlaying; // Toggle isPlaying
    if (this.isPlaying) {
      this.play(); // Call play method if music is playing
    } else {
      this.pause(); // Call pause method if music is paused
    }
  }

  // Skip to next music
  skipNext() {
    this.currentIndex = (this.currentIndex + 1) % this.singleMusic.music.length;
    // Logic to play next music
  }

  // Skip to previous music
  skipPrevious() {
    this.currentIndex = (this.currentIndex - 1 + this.singleMusic.music.length) % this.singleMusic.music.length;
    // Logic to play previous music
  }

  // Close page
  closePage() {
    this.navCtrl.back();
  }

  // Open menu
  openMenu() {
    this.menuCtrl.open();
  }



  constructor(private navCtrl: NavController, private menuCtrl: MenuController, private route: ActivatedRoute) { }


  ngOnInit() {
    const id = this.route.snapshot.params['id'];

    this.route.queryParams.subscribe(params => {
      const musicData = params['musicDataKey'];
      const id = this.route.snapshot.params['id'];

      const parsedMusicData = typeof musicData === 'string' ? JSON.parse(musicData) : musicData;

      // Filter the music data array to find the matching music items
      this.singleMusic = parsedMusicData.filter((element: any) => element.mid === id);
      this.currentIndex = parsedMusicData.findIndex((item: any) => item.id === id);
    });
  }


}
