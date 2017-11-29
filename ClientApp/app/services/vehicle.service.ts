import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class VehicleService {

  constructor(private _http: Http) { }

  getMakes(){
    return this._http.get('/api/makes').map(res => res.json());
  }

    getFeatures() {
        return this._http.get('/api/features').map(res => res.json());
    }
  
}
