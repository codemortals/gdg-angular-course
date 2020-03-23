import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ContactService {

    private url = 'https://us-central1-gdg-angular-course.cloudfunctions.net';

    constructor(
        private http: HttpClient,
    ) {}

    public sendMessage(message): Observable<any> {
        return this.http.post(`${this.url}/sendMessage`, message, { withCredentials: true });
        // return of(message);
    }

}
