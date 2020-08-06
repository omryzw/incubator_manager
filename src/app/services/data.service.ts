import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class DataService {

  public _url = 'http://localhost:8000';


  constructor(private http: HttpClient) { }

  getActive(){
    return this.http.get(this._url + '/getactive');
  }
}
