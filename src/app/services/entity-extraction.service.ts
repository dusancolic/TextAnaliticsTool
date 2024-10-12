import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EntityExtractionService {
  private readonly API_URL = environment.apiUrl;

  constructor(private httpClient : HttpClient) { }
}
