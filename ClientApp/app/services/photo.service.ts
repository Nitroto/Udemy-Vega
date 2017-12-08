import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class PhotoService {

    constructor(private _http: Http) { }

    upload(vehicleId, photo) {
        var formData = new FormData();
        formData.append('file', photo);
        return this._http.post(`/api/vehicles/${vehicleId}/photos`, formData).map(res => res.json());
    }

    getPhotos(vehicleId) {
        return this._http.get(`/api/vehicles/${vehicleId}/photos`).map(res => res.json());
    }
}