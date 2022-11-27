import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Serie } from './serie';

@Injectable({
  providedIn: 'root'
})

export class SerieService {

  private apiUrl = environment.baseUrl;

constructor(private http: HttpClient) {}

getSeries()  :Observable<Serie[]>  {
  return this.http.get<Serie[]>(this.apiUrl);;
}

}
