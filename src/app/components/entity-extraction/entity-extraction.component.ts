import { Component } from '@angular/core';
import { EntityExtractionService } from '../../services/entity-extraction.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-entity-extraction',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './entity-extraction.component.html',
  styleUrl: './entity-extraction.component.css'
})
export class EntityExtractionComponent {

  text: string;
  include:string;
  min_confidence: number;
  annotations: any[];

  isImageChecked: boolean;
  isAbstractChecked: boolean;
  isCategoriesChecked: boolean;


  constructor(private entityExtractionService: EntityExtractionService) {
    this.text = '';
    this.include = '';
    this.min_confidence = 0.6;
    this.annotations = [];
    
    this.isImageChecked = false;
    this.isAbstractChecked = false;
    this.isCategoriesChecked = false;
  }

  extractEntities() {
    this.include = '';
    this.annotations = [];
    this.buildIncludeString();
    this.entityExtractionService.extractEntities(this.text, this.min_confidence, this.include).subscribe((response: any) => {
      for(let annotation of response.annotations) {
        this.annotations.push({
          abstract: annotation.abstract,
          categories: annotation.categories,
          image: annotation.image.full
        });
      }
      console.log('Entities: ', response.annotations);
    });
  }

  buildIncludeString() {
    if(this.isAbstractChecked) {
      this.include += 'abstract,';
    }
    if(this.isCategoriesChecked) {
      this.include += 'categories,';
    }
    if(this.isImageChecked) {
      this.include += 'image';
    }

  }

}
