import { Component } from '@angular/core';
import { LanguageDetectionService } from '../../services/language-detection.service';
import { FormsModule } from '@angular/forms';
import { LanguageDetectionResponse } from '../../model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-language-detection',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './language-detection.component.html',
  styleUrl: './language-detection.component.css'
})
export class LanguageDetectionComponent {

  clean: boolean;
  text: string;
  detectedLanguages: LanguageDetectionResponse[] = [];

  constructor(private languageDetectionService: LanguageDetectionService) {
    this.clean = false;
    this.text = '';
    this.detectedLanguages;
  }

  detectLanguage() {
    this.languageDetectionService.detectLanguage(this.text, this.clean).subscribe((response: any) => {
      this.detectedLanguages = response.detectedLangs;
      console.log('Detected languages: ', this.detectedLanguages);
    });
  }
}
