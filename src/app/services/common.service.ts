import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

type AllowedHttpMethod = 'GET' | 'POST';

@Injectable({
    providedIn: 'root'
})
export class CommonService {

    constructor(private http: HttpClient) { }

    /**
     * API送信
     * @param {AllowedHttpMethod} method
     * @param {string} url
     * @param params
     * @param options
     * @returns {Observable<any>}
     */
    public call(method: AllowedHttpMethod, url: string, params?: any, options?: any): Observable<any> {
        let request: Observable<any>;
        if (!options) {
            // defaultでjson形式のレスポンスであると設定
            options = {responseType: 'json'};
        }
        if (method === 'POST') {
            request = this.http.post(url, params, options);
        } else if (method === 'GET') {
            request = this.http.get(url, options);
        }

        return request;
    }
}
