import { Component, OnInit } from '@angular/core';
import {PictureService} from '../picture.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private contacts;

  constructor(private _pictureService: PictureService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this._pictureService.getAll().subscribe((data:  Array<object>) => {
      this.contacts  =  data;
      console.log(data);
    });
  }

  onClickMe(val: any) {
    console.log(val);
    if (val === 2) {
      console.log('correct!');
      this.router.navigate(['']);
    }
  }
}
