import { Injectable } from '@angular/core';
import { IShows } from './shows';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
// import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

@Injectable({
    providedIn:'root'
})


export class ShowService{
    constructor(private http: HttpClient){}

    showUrl =  'https://api.themoviedb.org/3/tv/popular?api_key=02c1bc584e7e33e999bbc5c25bc6a514&language=en-US&page=1';
    getShows(): Observable<IShows[]> {
        return this.http.get<IShows[]>(this.showUrl)

        
    }

    // constructor(private _sanitizer: DomSanitizer){}
    
    // getImage(image: any){
    //     return this._sanitizer.bypassSecurityTrustStyle(`Linear-gradient(rgba(29, 29, 29, 0), rgba(16, 16, 23, 0.5)), url(${image})`);
    // }
}

@Pipe({name: 'safeHtml'})
export class SafeHtmlPipe implements PipeTransform {
    constructor(private sanitizer: DomSanitizer){}

    transform(value: any, ...args: any[]) {
        return this.sanitizer.bypassSecurityTrustHtml(value)
    }
    

    DoIt(image){
        return this.sanitizer.bypassSecurityTrustResourceUrl(image);
    }
    
}