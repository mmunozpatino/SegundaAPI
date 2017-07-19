import { Injectable } from '@angular/core';
import {Http, RequestOptions, Headers} from '@angular/http'
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PersonaService {
   url = 'http://localhost:3000/persona';

   constructor(private http: Http){}
   getPersona(id: String): Promise<any>{
      return this.http.get(this.url + '/' + id).toPromise().then(res => res.json());
   }
   getAll(): Promise<any[]>{
      return this.http.get(this.url).toPromise().then(res => res.json());
   }
}