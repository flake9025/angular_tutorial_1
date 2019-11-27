import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class APIHelper {

    constructor(private httpClient: HttpClient) { }

    public get(action: string): Promise<object> {
        console.log('APIHelper::get', action);
        return this.httpClient.get(environment.base_url + action).toPromise();
    }

    public post(action: string, data: any): Promise<object> {
        console.log('APIHelper::post', action);
        return this.httpClient.post(environment.base_url + action, data).toPromise();
    }

    public put(action: string, data: any): Promise<object> {
        console.log('APIHelper::put', action);
        return this.httpClient.put(environment.base_url + action, data).toPromise();
    }
}
