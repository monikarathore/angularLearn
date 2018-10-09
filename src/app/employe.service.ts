import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { IEmployee } from './employe';


@Injectable({
  providedIn: 'root'
})
export class EmployeService {
  public IEmployee = [];
  private _url = '/assets/data/employe.json';
  //private _url = 'http://dummy.restapiexample.com/api/v1/employees';
  constructor(private http: HttpClient) { }
  getEmploy(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this._url);
  }
}
