import { Component, OnInit } from '@angular/core';
import { HistoryService } from '../../services/history.service';
import { CommonModule, DatePipe } from '@angular/common';
import { HistoryModel } from '../../model';
@Component({
  selector: 'app-history',
  standalone: true,
  imports: [
    CommonModule,
    DatePipe
  ],
  templateUrl: './history.component.html',
  providers: [DatePipe],
  styleUrl: './history.component.css'
})
export class HistoryComponent implements OnInit {

  calls: HistoryModel[] = [];

  constructor(private historyService : HistoryService) { }

  ngOnInit(): void {
    this.calls = this.historyService.getHistory();
  }

}
