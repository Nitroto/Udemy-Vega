import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';
import { SaveVehicle } from '../models/vehicle';

@Injectable()
export class VehicleService {
    private readonly _vehiclesEndpoint = '/api/vehicles';

    constructor(private _http: Http) {
    }

    getMakes() {
        return this._http.get('/api/makes').map(res => res.json());
    }

    getFeatures() {
        return this._http.get('/api/features').map(res => res.json());
    }

    getVehicle(id) {
        return this._http.get(this._vehiclesEndpoint + '/' + id).map(res => res.json());
    }

    getVehicles(filter) {
        return this._http.get(this._vehiclesEndpoint + '?' + this.toQueryString(filter)).map(res => res.json());
    }

    toQueryString(obj) {
        var parts = [] as string[];
        for (var property in obj) {
            var value = obj[property];
            if (value != null && value != undefined)
                parts.push(encodeURIComponent(property) + '=' + encodeURIComponent(value));
        }

        return parts.join('&');
    }

    create(vehicle) {
        return this._http.post(this._vehiclesEndpoint, vehicle).map(res => res.json());
    }

    update(vehicle: SaveVehicle) {
        return this._http.put(this._vehiclesEndpoint + '/' + vehicle.id, vehicle).map(res => res.json());
    }

    delete(id) {
        return this._http.delete(this._vehiclesEndpoint + '/' + id).map(res => res.json());
    }
}
