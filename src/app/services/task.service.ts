import {Injectable} from '@angular/core';
import {Task} from "../models/task";
import {Category} from "../models/category";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private _http: HttpClient) {
  }

  addTask(data: any): Observable<any> {
    return this._http.post('http://localhost:3004/task', data);
  }

  getTask(data: any): Observable<any> {
    return this._http.get('http://localhost:3004/task', data);
  }

  deleteTask(id: number): Observable<any> {
    return this._http.delete(`http://localhost:3004/task/${id}`);
  }


}
