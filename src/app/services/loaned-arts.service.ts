import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Art} from '../models/art';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoanedArtsService {

  loanedArts : Art[]= [];

  constructor(private http: HttpClient) {

  }


  getLoanedArts(): Observable<any>{
    return this.http.get<Art>(environment.apiUrl.concat("/loan"))
  }

  //not done
  loan(data : FormData){
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'form-data');

    return this.http.post(environment.apiUrl.concat("/loan"), data, {headers: headers}).subscribe((res:any) => {
      console.log(res)
    })
  }
}
