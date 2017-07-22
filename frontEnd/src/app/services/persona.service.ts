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
   setAmigo(id: String, idf:String): Promise<any>{
      return this.http.put(this.url, {'id': id, 'idf': idf}).toPromise().then(res => res.json());
   }
   getUser(idp: String): Promise<any>{
      return this.http.get('http://localhost:3000/userPerson/' + idp).toPromise().then(res => res.json());
   }
}