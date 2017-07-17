import { Injectable } from '@angular/core';
import {Http, RequestOptions, Headers} from '@angular/http'
import 'rxjs/add/operator/toPromise';
import {User} from '../classes/user.class';

@Injectable()
export class UserService {
   url = 'http://localhost:3000/user';

   constructor(private http: Http){}

   get(): Promise<User[]> {
      return this.http.get(this.url).toPromise().then(resp => resp.json().data as User[]);
   }
   hola(){
      console.log('hola')
   }
}