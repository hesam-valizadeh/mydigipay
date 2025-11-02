import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HomePageViewDataInterface } from '../../view-models/home-page-view-data.interface';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private http = inject(HttpClient);
  getHomePageSections(): Observable<any> {
    return this.http.get<HomePageViewDataInterface>('/api/home');
  }
}
