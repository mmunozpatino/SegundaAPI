import { Injectable } from '@angular/core';
import {Http, RequestOptions, Headers} from '@angular/http'
import 'rxjs/add/operator/toPromise';

@Injectable()
export class MascotaService {
   url = 'http://localhost:3000/persona';

   constructor(private http: Http){}

   addNew(mascota: any): Promise<any>{
      return this.http.post(this.url + '/' + mascota.id, mascota).toPromise().then(res => res.json());
   }
}