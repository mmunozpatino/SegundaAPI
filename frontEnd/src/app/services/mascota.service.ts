import { Injectable } from '@angular/core';
import {Http, RequestOptions, Headers} from '@angular/http'
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from "rxjs/Observable";

@Injectable()
export class MascotaService {
   url = 'http://localhost:3000/persona';
   urlEspecies = 'http://localhost:3000/especie';

   especies: any;

   constructor(private http: Http){}

   addNew(mascota: any): Promise<any>{
      return this.http.post(this.url + '/' + mascota.id, mascota).toPromise().then(res => res.json());
   }
   getEspecies(): Promise<any>{
      return this.http.get(this.urlEspecies).toPromise().then(res => res.json());
   }
}