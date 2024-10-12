import { Component } from '@angular/core';
import { SentimentAnalysisService } from '../../services/sentiment-analysis.service';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sentiment-analysis',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './sentiment-analysis.component.html',
  styleUrl: './sentiment-analysis.component.css'
})
export class SentimentAnalysisComponent {

  lang: string;
  text: string;
  type: string;
  score: number;
  color = 'rgb(0, 0, 0)';

  constructor(private sentimentAnalysisService: SentimentAnalysisService) {
    this.lang = 'auto';
    this.text = '';
    this.type = '';
    this.score = 0;
  }

  analyzeSentiment() {
    this.sentimentAnalysisService.analyzeSentiment(this.text, this.lang).subscribe((response: any) => {
      this.type = response.sentiment.type;
      this.score = response.sentiment.score;
      this.color = this.sentimentAnalysisService.interpolateColor(this.score);
      console.log('Sentiment type: ', this.type);
      console.log('Sentiment score: ', this.score);
   });
  }

  getTypeColor() {
    return this.color;
  }
}
