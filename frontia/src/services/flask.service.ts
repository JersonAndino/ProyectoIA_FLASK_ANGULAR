import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

import { Subject } from 'rxjs';

@Injectable()
export class FlaskService{
    public url:string;
    constructor(
        private _http:HttpClient,
        //private toastr: ToastrService
    ){
        this.url='http://127.0.0.1:5000/';
    }

// hacer transaccion
//http://localhost:3600/do-transaccion
getFlask():Observable<any>{
    //let params=JSON.stringify(transaccion);
    //console.log(params);
    let headers=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.url,{headers:headers});
}
}