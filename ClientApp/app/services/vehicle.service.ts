import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';
import { SaveVehicle } from '../models/vehicle';

@Injectable()
export class VehicleService {

    constructor(private _http: Http) {
    }

    getMakes() {
        return this._http.get('/api/makes').map(res => res.json());
    }

    getFeatures() {
        return this._http.get('/api/features').map(res => res.json());
    }

    getVehicle(id) {
        return this._http.get('/api/vehicles/' + id).map(res => res.json());
    }

    create(vehicle) {
        return this._http.post('/api/vehicles', vehicle).map(res => res.json());
    }

    update(vehicle: SaveVehicle) {
        return this._http.put('/api/vehicles/' + vehicle.id, vehicle).map(res => res.json());
    }

    delete(id){
        return this._http.delete('/api/vehicles/'+id).map(res => res.json());
    }
}
