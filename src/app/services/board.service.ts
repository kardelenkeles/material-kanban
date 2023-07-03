import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Task} from "../models/task";
import {Category} from "../models/category";


@Injectable({
  providedIn: 'root'
})
export class BoardService {


  constructor(private _http: HttpClient) {
  }

  addBoard(data: any): Observable<any> {
    return this._http.post('http://localhost:3000/board', data);
  }

  updateBoard(id: number, data: any): Observable<any> {
    return this._http.put(`http://localhost:3000/board/${id}`, data);
  }

  getBoard(): Observable<any> {
    return this._http.get('http://localhost:3000/board');
  }

  deleteBoard(id: number): Observable<any> {
    return this._http.delete(`http://localhost:3000/board/${id}`);
  }

  categoryList: Category[] = [{

    id: 1,
    name: "Backlog",

  },
    {
      id: 2,
      name: "To Do"
    },
    {
      id: 3,
      name: "In Progress"
    },
    {
      id: 4,
      name: "Done"
    }
  ]


}
