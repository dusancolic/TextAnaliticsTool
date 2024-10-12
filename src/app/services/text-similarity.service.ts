import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TextSimilarityService {

  private readonly API_URL = environment.apiUrl;

  constructor(private httpClient : HttpClient) { }

  checkTextSimilarity(firstText: string, secondText: string): Observable<any>{
    const token = localStorage.getItem('token') || '';
    const params = new HttpParams().set('text1', firstText).set('text2', secondText).set('token', token);
    return this.httpClient.get(`${this.API_URL}/sim/v1`, {params});
  }
}
