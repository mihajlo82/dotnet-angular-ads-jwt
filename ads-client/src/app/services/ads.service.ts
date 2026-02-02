import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ad } from '../models/ad.model';

@Injectable({
  providedIn: 'root',
})
export class AdsService {
  private apiUrl = 'https://localhost:32769/api/ad'; // Your .NET API endpoint

  constructor(private http: HttpClient) {}

  getAllAds(): Observable<Ad[]> {
    return this.http.get<Ad[]>(this.apiUrl);
  }

  getAdById(id: string | undefined): Observable<Ad> {
    if(!id) {
      throw new Error('error Id!!!')
    }
    return this.http.get<Ad>(`${this.apiUrl}/${id}`);
  }

  createAd(ad: Omit<Ad, 'id'>): Observable<Ad> {
    return this.http.post<Ad>(this.apiUrl, ad);
  }

  updateAd(ad: Ad): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${ad.id}`, ad);
  }

  deleteAd(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
