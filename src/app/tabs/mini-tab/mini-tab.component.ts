import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mini-tab',
  templateUrl: './mini-tab.component.html',
  styleUrls: ['./mini-tab.component.scss'],
})
export class MiniTabComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('MiniTabComponent ngOnInit');
  }

}
