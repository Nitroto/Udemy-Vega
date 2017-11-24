import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map'

@Injectable()
export class MakeService {

  constructor(private _http: Http) { }

  getMakes(){
    return this._http.get('/api/makes').map(res => res.json);
  }
  
}
