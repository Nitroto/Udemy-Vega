import {Component, OnInit} from '@angular/core';
import {MakeService} from "../../services/make.service";

@Component({
    selector: 'vehicle-form',
    templateUrl: './vehicle-form.component.html',
    styleUrls: ['./vehicle-form.component.css']
})
export class VehicleFormComponent implements OnInit {
    _makes: any;

    constructor(private _makeService: MakeService) {
    }

    ngOnInit() {
        this._makeService.getMakes().subscribe(makes => {
            this._makes = makes;
            console.log("Makes", this._makes);
        });


    }

}
