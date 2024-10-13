import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HistoryService } from './history.service';
import { HistoryModel } from '../model';

@Injectable({
  providedIn: 'root'
})
export class TextSimilarityService {

  private readonly API_URL = environment.apiUrl;

  constructor(private httpClient : HttpClient,private historyService: HistoryService) { }

  checkTextSimilarity(firstText: string, secondText: string): Observable<any>{
    const token = localStorage.getItem('token') || '';
    const params = new HttpParams().set('text1', firstText).set('text2', secondText).set('token', token);
    var path = `${this.API_URL}/sim/v1?`;
    path = path + params.toString();
    const call = new HistoryModel('GET', path);
    this.historyService.addCall(call);
    return this.httpClient.get(`${this.API_URL}/sim/v1`, {params});
  }
}
