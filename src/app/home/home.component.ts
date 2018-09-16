import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onClickMe(val: any) {
    console.log(val);
    if(val === 2) {
      console.log('correct!');
    }
  }
}
