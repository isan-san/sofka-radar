import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Radar } from '../Models/Radar';

@Injectable({
  providedIn: 'root'
})
export class RadarService {
  private readonly baseUrl = 'https://c1-2023-ca-apprenticeradar-production.up.railway.app/api/v1/radars';
  // private readonly baseUrl = 'http://localhost:8080/api/v1/radars';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Radar[]> {
    return this.http.get<Radar[]>(this.baseUrl);
  }

  get(id: string): Observable<Radar> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Radar>(url);
  }

  create(radar: Radar): Observable<Radar> {
    return this.http.post<Radar>(this.baseUrl, radar);
  }

  update(radar: Radar): Observable<Radar> {
    const url = `${this.baseUrl}/${radar.radarId}`;
    return this.http.put<Radar>(url, radar);
  }

  delete(id: string): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete(url);
  }
}
