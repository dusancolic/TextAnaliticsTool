import { Injectable } from '@angular/core';
import { HistoryModel } from '../model';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  calls: HistoryModel[] = [];
  constructor() { }

  addCall(call: HistoryModel){
    this.calls.push(call);
  }

  getHistory(){
    return this.calls;
  }
}
