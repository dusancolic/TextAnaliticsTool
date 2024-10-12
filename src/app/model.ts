export interface LanguageDetectionResponse {
    lang: string;
    confidence: number;
}

export interface Annotation{
    abstract: string;
    categories: string[];
    image: string; 
}