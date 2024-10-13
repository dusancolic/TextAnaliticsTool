import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { HistoryService } from './history.service';
import { HistoryModel } from '../model';

@Injectable({
  providedIn: 'root'
})
export class EntityExtractionService {
  private readonly API_URL = environment.apiUrl;

  constructor(private httpClient : HttpClient, private historyService: HistoryService) { }

  extractEntities(text: string, minConfidence : number, include: string): Observable<any>{
    const token = localStorage.getItem('token') || '';
    const params = new HttpParams().set('text', text).set('min_confidence',minConfidence.toString()).set('include', include).set('token', token);
    var path = `${this.API_URL}/nex/v1?`;
    path = path + params.toString();
    const call = new HistoryModel('GET', path);
    this.historyService.addCall(call);
    return this.httpClient.get(`${this.API_URL}/nex/v1`, {params});
  }
}
