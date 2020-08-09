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

  getHatching() {
    return this.http.get(this._url + '/hatching');
  }

  getHatched() {
    return this.http.get(this._url + '/hatched');
  }

  getSingleProject(pid) {
    return this.http.post(this._url + '/singleproject', {
      'pid': pid
    });
  }
  

  addProject(cname , loadeggs) {
    return this.http.post(this._url + '/addproject', {
      'cname' : cname,
      'loadeggs' : loadeggs
    });
  }

  addHatched(hatched,comments,pid,srate){
    return this.http.post(this._url + '/addrecord', {
      'hatched': hatched,
      'comments': comments,
      'srate': srate,
      'pid': pid
    });
  }

  getHistory(){
    return this.http.get(this._url + '/history');
  }

  overallSuccess() {
    return this.http.get(this._url + '/getoverall');
  }
}
