import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TextSimilarityService } from '../../services/text-similarity.service';
@Component({
  selector: 'app-text-similarity',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './text-similarity.component.html',
  styleUrl: './text-similarity.component.css'
})
export class TextSimilarityComponent {

  firstText: string;
  secondText: string;
  similarity: number;

  constructor(private textSimilarityService: TextSimilarityService) {
    this.firstText = '';
    this.secondText = '';
    this.similarity = 0;
  }

  
  checkTextSimilarity() {
    this.textSimilarityService.checkTextSimilarity(this.firstText, this.secondText).subscribe((response: any) => {
      this.similarity = response.similarity;
      console.log('Similarity: ', this.similarity);
    });
  }
}
