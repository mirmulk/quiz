import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/internal/operators';

@Injectable()
export class PictureService {
  url = 'http://localhost:3000/pictures';

  constructor(private http: HttpClient) { }

  public getAll(): Observable<any> {
    return this.http.get(this.url);

  }
}
