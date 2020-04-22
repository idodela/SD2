import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Art} from '../models/art';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserArtService {

  constructor(private httpClient : HttpClient) { }



  getUserArts(){
    return this.httpClient.get<Art[]>(environment.apiUrl.concat('/userArts'));

  }
}
