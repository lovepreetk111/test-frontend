import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IallDropdown, IBannerCarosuelComponent, IFooterCmp, Inotice } from './data';

@Injectable({
  providedIn: 'root'
})
export class BanDataService {

  constructor(private http:HttpClient) { }
   apiUrl="http://localhost:3000/";
   
  // apiUrl="https://randomuser.me/api/?results=50" 
  getBannerData():Observable<IBannerCarosuelComponent[]>{
    // console.log(`${this.apiUrl}navbarData`)
    console.log(this.apiUrl)
    return this.http.get<IBannerCarosuelComponent[]>(`${this.apiUrl}bannerData`);
}
getNoticeData():Observable<Inotice[]>{
  return this.http.get<Inotice[]>(`${this.apiUrl}notice`)
  } 
  
  getFooterData():Observable<IFooterCmp[]>{
    return this.http.get<IFooterCmp[]>(`${this.apiUrl}footer`)
    }

    getAccordianData():Observable<IallDropdown[]>{
      return this.http.get<IallDropdown[]>(`${this.apiUrl}accordian-dropdown`)
      }


}