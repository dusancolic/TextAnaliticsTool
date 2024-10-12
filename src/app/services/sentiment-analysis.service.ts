import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SentimentAnalysisService {
  private readonly API_URL = environment.apiUrl;

  constructor(private httpClient : HttpClient) { }

  analyzeSentiment(text: string, lang : string): Observable<any>{
    const token = localStorage.getItem('token') || '';
    const params = new HttpParams().set('text', text).set('lang',lang).set('token', token);
    return this.httpClient.get(`${this.API_URL}/sent/v1`, {params});
  }

  interpolateColor(value: number) {
    let red, green, blue;
    
    if (value < 0) {
      red = 255;
      green = Math.round(165 * (value + 1));  
      blue = Math.round(42 * (value + 1));    
    } else {
      red = Math.round(165 * (1 - value));   
      green = Math.round(165 + 90 * value);   
      blue = Math.round(42 * (1 - value));    
    }
    
    return `rgb(${red}, ${green}, ${blue})`;
  }
}
