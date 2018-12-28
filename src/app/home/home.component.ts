import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mm-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  title = 'maxmate';

  constructor() { }

  ngOnInit() {
  }
}
