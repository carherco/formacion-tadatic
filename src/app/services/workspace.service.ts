import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class WorkspaceService {

  constructor(private http: HttpClient) { }

  getMockData(): Observable<any> {
      return this.http.get('assets/mock/workspace-mock.json');
  }
}
