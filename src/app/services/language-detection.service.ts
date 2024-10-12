import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageDetectionService {
  private readonly API_URL = environment.apiUrl;

  constructor(private httpClient : HttpClient) { }

  detectLanguage(text: string, clean: boolean) : Observable<any>{
    const token = localStorage.getItem('token') || '';
    const params = new HttpParams().set('text', text).set('clean', clean.toString()).set('token', token);
    return this.httpClient.get(`${this.API_URL}/li/v1`, {params});
  }
}
