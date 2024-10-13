export interface LanguageDetectionResponse {
    lang: string;
    confidence: number;
}

export interface Annotation{
    abstract: string;
    categories: string[];
    image: string; 
}

export class HistoryModel{
    timestamp: Date;
    method: string;
    url: string;
    constructor(method: string, url: string){
        this.timestamp = new Date();
        this.method = method;
        this.url = url;
    }
}