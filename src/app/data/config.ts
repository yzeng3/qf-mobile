import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class Config {

    public apiUrl = 'http://localhost:8090/';

    constructor() { }

}