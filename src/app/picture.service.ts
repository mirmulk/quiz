import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/internal/operators';

@Injectable()
export class PictureService {
  url = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(this.url)
      .pipe(map(response => response));

  }
}
