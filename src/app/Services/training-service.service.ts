import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Training } from '../Models/Training';

@Injectable({
  providedIn: 'root'
})
export class TrainingService{
  private readonly baseUrl = 'https://c1-2023-ca-apprenticeradar-production.up.railway.app/api/v1/training';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Training[]> {
    return this.http.get<Training[]>(this.baseUrl);
  }

  get(id: string): Observable<Training> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Training>(url);
  }

  create(training: Training): Observable<Training> {
    return this.http.post<Training>(this.baseUrl, training);
  }

  update(training: Training): Observable<Training> {
    const url = `${this.baseUrl}/${training.trainingId}`;
    return this.http.put<Training>(url, training);
  }

  delete(id: string): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete(url);
  }
}
