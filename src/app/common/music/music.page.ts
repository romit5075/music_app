import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuController, NavController } from '@ionic/angular';
import { appData } from '../../API/homeMusic';
import { Howl, Howler } from 'howler';
import { h } from 'ionicons/dist/types/stencil-public-runtime';

@Component({
  selector: 'app-music',
  templateUrl: './music.page.html',
  styleUrls: ['./music.page.scss'],
})

export class MusicPage implements OnInit {

  public allMusic: any;
  public currentIndex = 0; // Index of the current music item
  public singleMusic: any;
  public progress: number = 0;
  public progressInterval: any;
  public isPlaying = false;
  activeTrack: any = null;
  player: Howl | null = null;

  currentTime: number = 0;
  totalDuration: number = 0;

  openMenu() {
    throw new Error('Method not implemented.');
  }

  togglePlayPause(track: any) {
    this.activeTrack = track;
    if (!this.player) {
      // Create the player if it doesn't exist
      this.player = new Howl({
        src: [track],
        onplay: () => {
          this.isPlaying = true;
          this.startProgressTimer();
        },
        onpause: () => {
          this.isPlaying = false;
          this.startProgressTimer();
        },
        onstop: () => {
          this.isPlaying = false;
          this.startProgressTimer();
        }
      });
    }

    if (this.isPlaying) {
      this.player.pause(); // Pause if currently playing
    } else {
      this.player.play(); // Start playing if paused or stopped
    }
  }

  startProgressTimer() {
    this.progressInterval = setInterval(() => {
      if (this.player && this.player.playing()) {
        const currentTimeInSeconds = this.player.seek();
        const totalDurationInSeconds = this.player.duration();
        this.progress = (currentTimeInSeconds || 0) / totalDurationInSeconds * 100; // Update progress in percentage

        // Update current time and total duration
        this.currentTime = currentTimeInSeconds;
        this.totalDuration = totalDurationInSeconds;
      }
    }, 1000); // Update progress every second
  }

  formatTime(timeInSeconds: number): string {
    const minutes: number = Math.floor(timeInSeconds / 60);
    const seconds: number = Math.floor(timeInSeconds % 60);
    return `${this.padZero(minutes)}:${this.padZero(seconds)}`;
  }

  padZero(num: number): string {
    return (num < 10 ? '0' : '') + num;
  }

  // Close page
  closePage() {
    this.navCtrl.back();
  }

  skipNext() {

    this.currentIndex = (this.currentIndex + 1) % this.allMusic.length;
    const nextTrackUrl = this.allMusic[this.currentIndex].url;
    this.togglePlayPause(nextTrackUrl);
  }

  skipPrevious() {
    console.log(this.currentIndex)
    this.currentIndex = (this.currentIndex - 1 + this.singleMusic.length) % this.allMusic.length;
    const previousTrackUrl = this.allMusic[this.currentIndex].url;
    this.togglePlayPause(previousTrackUrl);
  }

  // Function to get the duration of the music
  getDuration(): number {
    return this.player ? this.player.duration() : 0;
  }

  // Function to seek to a specific time in the music
  seekTo(event: any) {
    const newValue = event.detail.value as number;
    const duration = this.player ? this.player.duration() : 0;
    const seekTime = (duration * newValue) / 100; // Correct calculation for progress in seconds
    if (this.player) {
      this.player.seek(seekTime); // Seek to the specified time in the song
      this.progress = newValue; // Update the progress variable
    }
  }

  constructor(private navCtrl: NavController, private menuCtrl: MenuController, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];

    this.route.queryParams.subscribe(params => {
      const musicData = params['musicDataKey'];
      const id = this.route.snapshot.params['id'];
      const parsedMusicData = typeof musicData === 'string' ? JSON.parse(musicData) : musicData;
      this.allMusic = parsedMusicData;

      // Filter the music data array to find the matching music items
      this.singleMusic = parsedMusicData.filter((element: any) => element.mid === id);
      this.currentIndex = parsedMusicData.findIndex((item: any) => item.mid === id);
    });
  }
}
