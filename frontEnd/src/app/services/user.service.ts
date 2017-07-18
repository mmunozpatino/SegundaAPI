import { Injectable } from '@angular/core';
import {Http, RequestOptions, Headers} from '@angular/http'
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {
   url = 'http://localhost:3000/user';

   constructor(private http: Http){}

   get(): Promise<any[]>{
      return this.http.get(this.url).toPromise().then(resp => resp.json());
   }
   getUser(usr: String): Promise<any[]>{
      return this.http.get(this.url + '/' + usr).toPromise().then(resp => resp.json());
   }
   addUser(usr: any): Promise<any>{
      return this.http.post(this.url, usr).toPromise().then(resp => resp.json());
   }   
}