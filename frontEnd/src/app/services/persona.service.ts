import { Injectable } from '@angular/core';
import {Http, RequestOptions, Headers} from '@angular/http'
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PersonaService {
   url = 'localhost:3000/persona';

   constructor(private http: Http){}
   getPersona(id: String): Promise<any>{
      return this.http.get(this.url + '/' + id).toPromise().then(res => res.json());
   }
}